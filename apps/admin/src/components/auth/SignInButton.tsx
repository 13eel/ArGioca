import { cookies } from "next/headers";
import { getCsrfToken } from "next-auth/react";

import { Button } from "@ui";

const SignInButton = async () => {
  const csrfToken = await getCsrfToken({
    req: { headers: { cookie: cookies().toString() } },
  });

  return (
    <form action="/api/auth/signin/google" method="post">
      <input type="hidden" name="csrfToken" value={csrfToken} />
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export { SignInButton };
