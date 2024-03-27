import { cookies } from "next/headers";
import { getCsrfToken } from "next-auth/react";

import { Button } from "@ui";

const SignOutButton = async () => {
  const csrfToken = await getCsrfToken({
    req: { headers: { cookie: cookies().toString() } },
  });

  return (
    <form action="/api/auth/signout" method="post">
      <input type="hidden" name="csrfToken" value={csrfToken} />
      <Button type="submit">Sign out</Button>
    </form>
  );
};

export { SignOutButton };
