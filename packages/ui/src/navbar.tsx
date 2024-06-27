// packages/ui/src/navbar.tsx

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

export const Navbar = ({ icon, session }: NavbarProps) => {
  const handleLogin: MouseEventHandler<HTMLButtonElement> = () => {
    signIn("github");
  };

  const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
    signOut();
  };

  return (
    <nav className="ui-bg-white ui-shadow-md">
      <div className="ui-mx-auto ui-max-w-7xl ui-px-2 sm:ui-px-6 lg:ui-px-8">
        <div className="ui-relative ui-flex ui-h-16 ui-items-center ui-justify-between">
          {/* Daily Discoveries Icon */}
          <div className="ui-flex ui-flex-shrink-0 ui-items-center ui-pt-2">
            <Image
              className="ui-w-navbar-icon ui-h-navbar-icon"
              src={icon}
              alt="Your Company"
            />
          </div>

          {/* User Login Button */}
          <div className="ui-alex ui-items-center ui-space-x-4">
            {!session ? (
              <div>
              <Button
                className="ui-bg-blue-500 ui-text-white ui-px-4 ui-py-2 ui-rounded-lg ui-flex ui-items-center ui-space-x-2 md:ui-px-4 md:ui-py-2"
                onClick={handleLogin}
              >
                <LogInIcon className="ui-h-5 ui-w-5 ui-text-white" />
                <span>Login</span>
              </Button>
              <Button
                className="ui-bg-blue-500 ui-text-white ui-px-4 ui-py-2 ui-rounded-lg ui-flex ui-items-center ui-space-x-2 md:ui-px-4 md:ui-py-2"
                onClick={handleLogout}
              >
                <LogInIcon className="ui-h-5 ui-w-5 ui-text-white" />
                <span>Logout</span>
              </Button>
              </div>
            ) : (
              <span>Welcome, {session.user?.name}</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
