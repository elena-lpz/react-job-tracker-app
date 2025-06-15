import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { statuses } from "../utils/status";
import { titleColours } from "../utils/colours";
import JobModal from "./JobModal";
import AddJobModal from "./AddJobModal";

export default function JobBoard() {
  const [JobsData, setJobsData] = useState([]);
  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  //manage effect

  useEffect(() => {
    getJobs();
  }, []);

  //fetch jobs
  async function getJobs() {
    const response = await fetch(
      "https://react-job-tracker-app.onrender.com/jobs"
    );
    const data = await response.json();
    //console.log(data);
    setJobsData(data);
  }

  //delete jobs
  async function handleDelete(jobId) {
    await fetch(
      `https://react-job-tracker-app.onrender.com/deleteJob/${jobId}`,
      {
        method: "DELETE",
      }
    );
    await getJobs();
  }

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
    <main className=" mx-2 md:mx-8 mt-8 flex flex-col min-h-screen">
      <div className="p-1 flex justify-between items-center">
        <h1 className="px-2 text-xl md:text-2xl font-semibold">
          Your job board
        </h1>
        <button onClick={() => setAddModal(true)}>Add New Job</button>
      </div>

      <div className="mt-4 flex flex-wrap md:flex-nowrap overflow-x-auto md:divide-x md:divide-gray-200">
        {columns.map((column) => (
          <div
            key={column.status}
            className="flex-shrink-0 w-full md:w-1/5  min-w-[15vw] p-2 pb-6"
          >
            <h2
              className="text-lg md:text-xl rounded-2xl px-6 py-3 mb-3 md:mb-6 capitalize font-bold text-gray-800"
              style={{ backgroundColor: titleColours[column.status] }}
            >
              {column.status}
            </h2>
            {column.jobs.map((job) => (
              <div key={job.id}>
                <JobCard
                  jobTitle={job.job_title}
                  companyName={job.company_name}
                  location={job.location}
                  status={job.status}
                  onClick={() => {
                    setSelectedJob(job);
                    setModal(true);
                  }}
                  onDelete={() => handleDelete(job.id)}
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
    </main>
  );
}
