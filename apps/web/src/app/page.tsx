import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react"
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>{JSON.stringify(session)}</div>
  );
}