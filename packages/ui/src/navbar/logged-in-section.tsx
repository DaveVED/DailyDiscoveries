import { Session } from "next-auth";
import Image from "next/image";

export const NavbarLoggedInSection = ({
    session,
    toggleDropdown,
  }: {
    session: Session;
    toggleDropdown: () => void;
  }) => {
    if (!session.user) {
      return <div>Invalid Session User...</div>;
    }
  
    return (
      <div className="ui-relative ui-flex ui-items-center ui-space-x-4">
        <div className="ui-relative">
          <Image
            className="ui-rounded-full ui-w-12 ui-h-12 ui-cursor-pointer"
            src={session.user.image as string}
            alt="Profile"
            width={50}
            height={50}
            onClick={toggleDropdown}
          />
          <span className="ui-absolute ui-bottom-0 ui-right-0 ui-bg-green-500 ui-rounded-full ui-w-3 ui-h-3 ui-border-2 ui-border-white"></span>
        </div>
      </div>
    );
  };