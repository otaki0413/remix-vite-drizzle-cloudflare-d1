import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const resources = sqliteTable("resources", {
  id: integer("id").primaryKey().notNull(),
  title: text("title").notNull(),
  href: text("href").notNull(),
});
