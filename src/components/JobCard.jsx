import React from "react";
import { deleteJob, updateJob } from "../api";

const JobCard = ({ job }) => {
  const handleStatusChange = async (e) => {
    await updateJob(job._id, { status: e.target.value });
    window.location.reload();
  };

  const handleDelete = async () => {
    await deleteJob(job._id);
    window.location.reload();
  };

  return (
    <div className="job-card">
      <div>
        <h2 className="font-bold text-lg">{job.company}</h2>
        <p>{job.role}</p>
        <p>Status: {job.status}</p>
        <p>Applied on: {new Date(job.date).toLocaleDateString()}</p>
        {job.link && (
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Link
          </a>
        )}
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <select
          value={job.status}
          onChange={handleStatusChange}
          className="border rounded p-1"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
