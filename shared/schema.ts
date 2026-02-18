import { pgTable, text, serial, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Although the user requested a no-backend solution (localStorage),
// we define the schema here to provide strict typing for the frontend generator
// and to ensure the data structure is consistent.

export const reflections = pgTable("reflections", {
  id: serial("id").primaryKey(),
  day: serial("day").notNull(), // Day 1-40
  scripture: text("scripture").notNull(),
  verseReference: text("verse_reference").notNull(),
  reflection: text("reflection").notNull(),
  challenge: text("challenge").notNull(),
});

export const journalEntries = pgTable("journal_entries", {
  id: text("id").primaryKey(), // UUID string for localStorage
  content: text("content").notNull(),
  date: text("date").notNull(), // ISO Date string
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertReflectionSchema = createInsertSchema(reflections);
export const insertJournalEntrySchema = createInsertSchema(journalEntries);

export type Reflection = typeof reflections.$inferSelect;
export type InsertReflection = z.infer<typeof insertReflectionSchema>;

export type JournalEntry = typeof journalEntries.$inferSelect;
export type InsertJournalEntry = z.infer<typeof insertJournalEntrySchema>;
// For client-side inserts where id is generated
export type CreateJournalEntry = Omit<InsertJournalEntry, 'id' | 'createdAt'>;

// Types for Holy Week content (static content structure)
export interface HolyWeekDay {
  day: string; // "Palm Sunday", "Good Friday", etc.
  title: string;
  explanation: string;
  scripture: string;
  reflectionPrompt: string;
}
