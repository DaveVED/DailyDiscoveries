"use client"
import React from 'react';
import { Heart, MessageCircle, PlusCircle } from 'lucide-react';
import { useRouter } from "next/navigation";

const posts = [
  {
    id: 1,
    user: 'JohnDoe',
    content: 'I learned how to use TypeScript with Next.js today!',
    postTime: '30m'
  },
  {
    id: 2,
    user: 'JaneSmith',
    content: 'Discovered the basics of React hooks and how to use them effectively.',
    postTime: '1h'
  },
  {
    id: 3,
    user: 'AliceW',
    content: 'Found out that you can use the Fetch API to make network requests in JavaScript.',
    postTime: '2h'
  }
];

export default function Home() {
  const router = useRouter();

  const handlePostClick = (user: string, postId: number) => {
    router.push(`/user/${user.toLowerCase()}/${postId}`);
  };

  const handleUploadClick = () => {
    router.push('/upload');
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Daily Discoveries</h1>
          <button
            onClick={handleUploadClick}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <PlusCircle className="w-6 h-6 mr-1" />
            <span>Upload</span>
          </button>
        </div>
        <div className="divide-y divide-gray-300">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="p-4 cursor-pointer"
              onClick={() => handlePostClick(post.user, post.id)}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img
                    src={`https://i.pravatar.cc/150?img=${post.id}`}
                    alt={`${post.user}'s avatar`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <span className="font-semibold">{post.user}</span>
                    <span className="text-gray-500 mx-2">@{post.user.toLowerCase()}</span>
                    <span className="text-gray-500">· {post.postTime}</span>
                  </div>
                </div>
              </div>
              <p className="mb-2">{post.content}</p>
              <div className="flex justify-end space-x-2">
                <button className="text-gray-600 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-blue-500">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
