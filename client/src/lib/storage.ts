import { type JournalEntry, type CreateJournalEntry } from "@shared/schema";
import { v4 as uuidv4 } from 'uuid';

const JOURNAL_KEY = "forty_journal_entries";

export const journalStorage = {
  getAll: (): JournalEntry[] => {
    try {
      const stored = localStorage.getItem(JOURNAL_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      // Sort by date descending
      return parsed.sort((a: JournalEntry, b: JournalEntry) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } catch (e) {
      console.error("Failed to load journal", e);
      return [];
    }
  },

  add: (entry: CreateJournalEntry): JournalEntry => {
    const entries = journalStorage.getAll();
    const newEntry: JournalEntry = {
      id: uuidv4(),
      content: entry.content,
      date: entry.date,
      createdAt: new Date(),
    };
    
    const updated = [newEntry, ...entries];
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    return newEntry;
  },

  delete: (id: string): void => {
    const entries = journalStorage.getAll();
    const updated = entries.filter(e => e.id !== id);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }
};
