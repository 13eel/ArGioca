import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

import { SignInButton } from "~/components/auth/SignInButton";
import { SignOutButton } from "~/components/auth/SignOutButton";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();
  if (session) {
    // redirect("/eventi");
    return "asd";
  }
  return (
    <>
      <SignInButton />
    </>
  );
}
