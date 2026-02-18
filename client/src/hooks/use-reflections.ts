import { useQuery } from "@tanstack/react-query";
import { reflectionsData } from "@/lib/data";
import { api } from "@shared/routes";

// Mocking API behavior with local data
export function useReflections() {
  return useQuery({
    queryKey: [api.reflections.list.path],
    queryFn: async () => {
      // Simulate network delay for effect
      await new Promise(resolve => setTimeout(resolve, 300));
      return reflectionsData;
    }
  });
}

export function useReflection(day: number) {
  return useQuery({
    queryKey: [api.reflections.get.path, day],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const reflection = reflectionsData.find(r => r.day === day);
      if (!reflection) throw new Error("Reflection not found");
      return reflection;
    }
  });
}
