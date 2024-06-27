"use client";
import { signIn, signOut } from "next-auth/react";
import { LogInIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { Button } from './button';
import { MouseEventHandler } from 'react';
import { Session } from "next-auth";

interface NavbarProps {
  icon: StaticImageData;
  session: Session | null;
}

const NavbarLoginSection = ({ onLogin }: { onLogin: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <div>
      <Button
        className="ui-bg-blue-500 ui-text-white ui-px-4 ui-py-2 ui-rounded-lg ui-flex ui-items-center ui-space-x-2"
        onClick={onLogin}
      >
        <LogInIcon className="ui-h-5 ui-w-5 ui-text-white" />
        <span>Login</span>
      </Button>
    </div>
  );
}

const NavbarLoggedInSection = ({ onLogout, session }: { onLogout: MouseEventHandler<HTMLButtonElement>, session: Session }) => {
  if (!session.user) {
    return (
      <div>Invalid Session User...</div>
    );
  }

  return (
    <div className="ui-flex ui-items-center ui-space-x-4">
      <div className="ui-relative">
        <Image
          className="ui-rounded-full ui-w-12 ui-h-12"
          src={session.user.image as string}
          alt="Profile"
          width={50}
          height={50}
        />
        <span className="ui-absolute ui-bottom-0 ui-right-0 ui-bg-green-500 ui-rounded-full ui-w-3 ui-h-3 ui-border-2 ui-border-white"></span>
      </div>
    </div>
  );
}

export const Navbar = ({ icon, session }: NavbarProps) => {
  const handleLogin: MouseEventHandler<HTMLButtonElement> = () => {
    signIn("github");
  };

  const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
    signOut();
  };

  return (
    <nav
      className="
        ui-flex ui-flex-wrap
        ui-items-center
        ui-justify-between
        ui-w-full
        ui-py-4
        ui-md:py-0
        ui-px-4
        ui-text-lg ui-text-gray-700
        ui-bg-white
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
              <NavbarLoggedInSection session={session} onLogout={handleLogout} />
            )}      </div>
    </nav>
  );
};
