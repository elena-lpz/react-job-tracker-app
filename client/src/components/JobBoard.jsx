import { useState, useEffect } from "react";
import JobCard from "./JobCard";

export default function JobBoard() {
  const [JobsData, setJobsData] = useState([]);

  //manage effect
  useEffect(() => {
    async function getJobs() {
      const response = await fetch("http://localhost:8080/jobs");

      const data = await response.json();
      //console.log(data);
      setJobsData(data);
    }
    getJobs();
  }, []);

  return (
    <div>
      {JobsData.map((job) => {
        return (
          <JobCard
            jobTitle={job.job_title}
            companyName={job.company_name}
            location={job.location}
          />
        );
      })}
    </div>
  );
}
