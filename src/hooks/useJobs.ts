import { getJobs } from "@/services/JobsApi";
import { useQuery } from "@tanstack/react-query";

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
}
