"use client";
import { usePathname } from 'next/navigation';

const UserProfile = () => {
    const pathname = usePathname()
    return (
    <div>
      <h1>User Profile: {pathname}</h1>
    </div>
  );
};

export default UserProfile;
