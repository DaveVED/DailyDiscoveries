import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID);
console.log("GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET);
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
