import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as auth from "./schema/auth";
import * as events from "./schema/events";

export const schema = {
  ...auth,
  ...events,
};

export * from "drizzle-orm";

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, {
  schema,
});

export type Database = typeof db;
