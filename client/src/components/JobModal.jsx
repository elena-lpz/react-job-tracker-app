const JobModal = ({
  jobTitle,
  companyName,
  location,
  salary,
  job_description,
  link,
  date_applied,
  application_status,
  setModal,
}) => {
  return (
    <div
      onClick={() => setModal(false)}
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        <h2 className="text-2xl font-bold mb-4">{jobTitle}</h2>
        <div className="space-y-2">
          <div>
            <p>Company:</p> {companyName}
          </div>
          <div>
            <p>Location:</p> {location}
          </div>
          <div>
            <p>Salary:</p>
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(salary)}
          </div>
          <div>
            <p>Description:</p> {job_description}
          </div>
          <div>
            <p>Link:</p>
            <a href={link} target="_blank">
              Job Advert
            </a>
          </div>
          <div>
            <p>Date applied:</p>
            {/* need to come back to this. date not working as intended but it might be fine once the data is submitted through a form as it worked fine with my guestbook project  */}
            {new Date(date_applied).toLocaleDateString("en-GB")}
          </div>
          <div>
            <p>Status:</p> {application_status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
