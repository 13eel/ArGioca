import { sql } from "drizzle-orm";
import { index, int, text } from "drizzle-orm/sqlite-core";

import { createTable } from "../createTable";
import { users } from "./auth";

export const events = createTable(
  "event",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    start: int("start", { mode: "timestamp" }),
    end: int("end", { mode: "timestamp" }),
    createdById: text("createdById", { length: 255 })
      .notNull()
      .references(() => users.id),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("updatedAt", { mode: "timestamp" }),
  },
  (example) => ({
    createdByIdIdx: index("createdById_idx").on(example.createdById),
    nameIndex: index("name_idx").on(example.name),
  }),
);
