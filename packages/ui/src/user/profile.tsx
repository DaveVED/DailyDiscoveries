"use client";
export const Profile = ({ slug }: { slug: string }) => {
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    profilePicture: 'https://i.pravatar.cc/150?img=3',
    bio: 'Software Developer at XYZ. Loves coding and coffee.',
    location: 'San Francisco, CA'
  };

  return (
    <div className="ui-flex ui-flex-col md:ui-flex-row ui-bg-gray-100 ui-min-h-screen">
      <div className="ui-w-full md:ui-w-1/3 ui-bg-white ui-shadow-lg ui-p-4 md:ui-p-0">
        <div className="ui-flex ui-flex-row md:ui-flex-col ui-items-center md:ui-items-start ui-p-2 md:ui-p-8">
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className="ui-w-16 ui-h-16 md:ui-w-24 md:ui-h-24 ui-rounded-full ui-mb-0 md:ui-mb-4 ui-mr-4 md:ui-mr-0"
          />
          <div className="ui-flex ui-flex-col ui-items-start md:ui-items-center ui-w-full">
            <h2 className="ui-text-base md:ui-text-xl ui-font-semibold ui-text-center md:ui-text-left">{user.name}</h2>
            <p className="ui-text-gray-500 ui-text-xs md:ui-text-sm ui-text-center md:ui-text-left">@{user.username}</p>
            <div className="ui-mt-2 ui-text-center md:ui-text-left">
              <p className="ui-text-gray-700 ui-text-xs md:ui-text-sm">{user.bio}</p>
              <p className="ui-text-gray-500 ui-mt-1 ui-text-xs md:ui-text-sm">{user.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ui-flex-1 ui-p-2 md:ui-pl-8">
        <h1 className="ui-text-xl md:ui-text-2xl ui-font-bold">User Profile: {slug}</h1>
      </div>
    </div>
  );
};
