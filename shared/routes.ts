import { z } from 'zod';
import { insertJournalEntrySchema, journalEntries, reflections } from './schema';

export const api = {
  // Although this is a localStorage app, defining these routes helps structure 
  // the frontend's data access layer concepts.
  journal: {
    list: {
      method: 'GET' as const,
      path: '/api/journal' as const,
      responses: {
        200: z.array(z.custom<typeof journalEntries.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/journal' as const,
      input: insertJournalEntrySchema,
      responses: {
        201: z.custom<typeof journalEntries.$inferSelect>(),
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/journal/:id' as const,
      responses: {
        204: z.void(),
      },
    },
  },
  reflections: {
    list: {
      method: 'GET' as const,
      path: '/api/reflections' as const,
      responses: {
        200: z.array(z.custom<typeof reflections.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/reflections/:day' as const,
      responses: {
        200: z.custom<typeof reflections.$inferSelect>(),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
