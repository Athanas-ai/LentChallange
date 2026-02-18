import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { journalStorage } from "@/lib/storage";
import { type CreateJournalEntry } from "@shared/schema";

export function useJournal() {
  return useQuery({
    queryKey: [api.journal.list.path],
    queryFn: async () => {
      // Fetch from local storage instead of API
      return journalStorage.getAll();
    },
  });
}

export function useCreateJournalEntry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateJournalEntry) => {
      // Save to local storage
      return journalStorage.add(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.journal.list.path] });
    },
  });
}

export function useDeleteJournalEntry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      journalStorage.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.journal.list.path] });
    },
  });
}
