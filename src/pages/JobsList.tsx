import { useJobs } from "../hooks/useJobs";

export default function JobsList() {
  const { data: jobs, isLoading, error } = useJobs();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {jobs.slice(0, 20).map((job) => (
          <li key={job.id}>
            {job.title} — {job.company_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
