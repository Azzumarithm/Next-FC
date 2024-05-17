import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const messages = sqliteTable('messages', {
  id: integer('id').primaryKey(),
  message: text('message').notNull(),

});
