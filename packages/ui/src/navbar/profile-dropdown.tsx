import { Session } from "next-auth";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { LogOutIcon } from "lucide-react";

export const ProfileDropdown = ({
    session,
    onLogout,
    onViewProfile,
  }: {
    session: Session;
    onLogout: MouseEventHandler<HTMLButtonElement>;
    onViewProfile: MouseEventHandler<HTMLButtonElement>;
  }) => {
    if (!session.user) {
      return <div>Invalid Session User...</div>;
    }
  
    return (
      <div className="ui-absolute ui-right-0 ui-w-48 ui-bg-white ui-border ui-rounded-md ui-shadow-lg ui-mt-0">
        <button
          className="ui-w-full ui-text-left ui-px-4 ui-py-2 ui-flex ui-items-center ui-space-x-2 hover:ui-bg-gray-100"
          onClick={onViewProfile}
        >
          <Image
            className="ui-rounded-full ui-w-8 ui-h-8"
            src={session.user.image as string}
            alt="Profile"
            width={32}
            height={32}
          />
          <div className="ui-flex ui-flex-col">
            <span className="ui-font-semibold">View Profile</span>
            <span className="ui-text-sm ui-text-gray-500">{session.user.name}</span>
          </div>
        </button>
        <button
          className="ui-w-full ui-text-left ui-px-4 ui-py-2 ui-flex ui-items-center ui-space-x-2 hover:ui-bg-gray-100"
          onClick={onLogout}
        >
          <LogOutIcon className="ui-h-5 ui-w-5 ui-text-gray-600" />
          <span>Logout</span>
        </button>
      </div>
    );
  };