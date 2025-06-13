import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { statuses } from "../utils/status";

export default function JobBoard() {
  const [JobsData, setJobsData] = useState([]);

  //manage effect
  useEffect(() => {
    async function getJobs() {
      const response = await fetch("http://localhost:8080/jobs");

      const data = await response.json();
      //console.log(data);
      console.log("Jobs fetched: ", data);
      setJobsData(data);
    }
    getJobs();
  }, []);

  const columns = statuses.map((status) => {
    const jobsInColumn = JobsData.filter(
      (job) => job.application_status.toLowerCase() === status
    );
    return {
      status,
      jobs: jobsInColumn,
    };
  });

  return (
    <div className="flex divide-x divide-gray-300">
      {columns.map((column) => (
        <div key={column.status} className="">
          <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">
            {column.status}
          </h2>
          {column.jobs.map((job) => (
            <JobCard
              key={job.id}
              jobTitle={job.job_title}
              companyName={job.company_name}
              location={job.location}
              status={job.status}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
