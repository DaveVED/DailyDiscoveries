"use client";
import { Profile } from '@repo/ui/user';
import { usePathname } from 'next/navigation';
import React from 'react';

const UserProfile = () => {
  const pathname = usePathname();
  return (
    <Profile slug="davedennis" />
  );
};

export default UserProfile;
