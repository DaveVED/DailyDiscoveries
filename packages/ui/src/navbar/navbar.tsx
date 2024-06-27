"use client";
import { useState, MouseEventHandler } from "react";
import { signIn, signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { NavbarLoginSection } from "./login-section";
import { NavbarLoggedInSection } from "./logged-in-section";
import { ProfileDropdown } from "./profile-dropdown";

interface NavbarProps {
  icon: StaticImageData;
  session: Session | null;
}

export const Navbar = ({ icon, session }: NavbarProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogin: MouseEventHandler<HTMLButtonElement> = () => {
    signIn("github");
  };

  const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
    signOut();
    setDropdownOpen(false);
  };

  const handleViewProfile: MouseEventHandler<HTMLButtonElement> = () => {
    if (session?.user) {
      setDropdownOpen(false);
      router.push(`/user/${session.user.name}`); // Update with your actual user identifier
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="ui-relative">
      <nav
        className="
          ui-flex ui-flex-wrap
          ui-items-center
          ui-justify-between
          ui-w-full
          ui-md:py-0
          ui-px-4
          ui-text-lg ui-text-gray-700
          ui-bg-white
          ui-shadow-md
        "
      >
        <div>
          <a href="#">
            <Image
              className="ui-w-navbar-icon ui-h-navbar-icon"
              src={icon}
              alt="Your Company"
            />
          </a>
        </div>
        <div>
          {!session ? (
            <NavbarLoginSection onLogin={handleLogin} />
          ) : (
            <NavbarLoggedInSection session={session} toggleDropdown={toggleDropdown} />
          )}
        </div>
      </nav>
      {dropdownOpen && session && (
        <ProfileDropdown session={session} onLogout={handleLogout} onViewProfile={handleViewProfile} />
      )}
    </div>
  );
};
