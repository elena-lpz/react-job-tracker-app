import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { statuses } from "../utils/status";
import JobModal from "./JobModal";
import AddJobModal from "./AddJobModal";

export default function JobBoard() {
  const [JobsData, setJobsData] = useState([]);
  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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

  // filter jobs by status
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
    <div className="flex flex-col min-h-screen">
      <div className="p-4">
        <button onClick={() => setAddModal(true)}>Add New Job</button>
      </div>

      <div className="flex flex-1 overflow-x-auto divide-x divide-gray-300">
        {columns.map((column) => (
          <div key={column.status} className="flex-1 min-w-[250px] p-2">
            <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">
              {column.status}
            </h2>
            {column.jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => {
                  setSelectedJob(job);
                  setModal(true);
                }}
              >
                <JobCard
                  jobTitle={job.job_title}
                  companyName={job.company_name}
                  location={job.location}
                  status={job.status}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* only render modal when modal is open (true) */}
      {/* open modal with selectedJob info */}
      {modal ? (
        <JobModal
          jobTitle={selectedJob.job_title}
          companyName={selectedJob.company_name}
          location={selectedJob.location}
          salary={selectedJob.salary}
          job_description={selectedJob.job_description}
          link={selectedJob.link}
          date_applied={selectedJob.date_applied}
          application_status={selectedJob.application_status}
          setModal={setModal}
        />
      ) : null}

      {/* only render modal when addModal is open (true) */}
      {/* open AddJobModal  */}
      {addModal ? <AddJobModal setAddModal={setAddModal} /> : null}
    </div>
  );
}
