import { MouseEventHandler } from "react";
import { LogInIcon } from "lucide-react";

export const NavbarLoginSection = ({
    onLogin,
  }: {
    onLogin: MouseEventHandler<HTMLButtonElement>;
  }) => {
    return (
      <div>
        <button
          className="ui-bg-blue-500 ui-text-white ui-px-4 ui-py-2 ui-rounded-lg ui-flex ui-items-center ui-space-x-2"
          onClick={onLogin}
        >
          <LogInIcon className="ui-h-5 ui-w-5 ui-text-white" />
          <span>Login</span>
        </button>
      </div>
    );
  };
  