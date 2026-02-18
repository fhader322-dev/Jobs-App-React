export async function getJobs() {
  const res = await fetch("https://remotive.com/api/remote-jobs");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.jobs; // array
}
