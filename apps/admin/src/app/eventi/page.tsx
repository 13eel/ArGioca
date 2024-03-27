import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { Button } from "@ui";

import { SignOutButton } from "~/components/auth/SignOutButton";

export default async function Home() {
  noStore();

  return (
    <>
      <SignOutButton />
      <Button>Crea Evento</Button>
    </>
  );
}
