import { useState } from "react";

export default function AddJobModal({ setAddModal, refreshJobs }) {
  const [formData, setFormData] = useState({
    job_title: "",
    company_name: "",
    location: "",
    salary: "",
    job_description: "",
    link: "",
    date_applied: "",
    application_status: "toapply",
  });
  //defaults to "toapply"

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://react-job-tracker-app.onrender.com/addJob", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    //close modal after submit
    refreshJobs();
    setAddModal(false);
  };

  return (
    <div
      onClick={() => setAddModal(false)}
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-[90dvw] md:max-w-[50dvw] max-h-[90vh] overflow-y-auto"
        // stops modal from closing when clicking on it
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Add New Job</h2>

        {/* will need to rearrange the input fields to take up less space (date and link could go in the same line for example) for now they can be scrolled */}

        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-4">
            <label htmlFor="job_title">Job title</label>
            <input
              type="text"
              name="job_title"
              placeholder="Job Title"
              value={formData.job_title}
              onChange={handleFormData}
              className="w-full border rounded p-2"
              required
            />
            <label htmlFor="company_name">Company name</label>
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={handleFormData}
              className="w-full border rounded p-2"
              required
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleFormData}
              className="w-full border rounded p-2"
              required
            />
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleFormData}
              className="w-full border rounded p-2"
              required
            />
            <label htmlFor="job_description">Job description</label>
            <textarea
              name="job_description"
              placeholder="Job Description"
              value={formData.job_description}
              onChange={handleFormData}
              className="w-full border rounded p-2"
              rows="3"
              required
            />
            <label htmlFor="link">Job link</label>
            <input
              type="url"
              name="link"
              placeholder="Job Link"
              value={formData.link}
              onChange={handleFormData}
              className="w-full border rounded p-2"
            />
            <label htmlFor="date_applied">Date applied</label>
            <input
              type="date"
              name="date_applied"
              value={formData.date_applied}
              onChange={handleFormData}
              className="w-full border rounded p-2"
            />
            <label htmlFor="application_status">Application status</label>
            <select
              name="application_status"
              value={formData.application_status}
              onChange={handleFormData}
              className="w-full border rounded p-2"
            >
              {/* change toapply to whislist??  */}
              <option value="toapply">To Apply</option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </fieldset>

          <div className="mt-3 flex justify-end gap-2">
            {/* cancel button closes modal  */}
            {/* might want to add a close button too...  */}
            <button type="button" onClick={() => setAddModal(false)}>
              Cancel
            </button>
            {/* save button submits data  */}
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
