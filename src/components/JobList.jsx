import React, { useEffect, useState } from "react";
import { fetchJobs } from "../api";
import JobCard from "./JobCard";
import Filter from "./Filter";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const getJobs = async () => {
      const res = await fetchJobs();
      setJobs(res.data);
    };
    getJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) => filter === "All" || job.status === filter
  );

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="grid gap-4 mt-4">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
