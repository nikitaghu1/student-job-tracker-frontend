import React, { useState } from "react";
import { createJob } from "../api";

const JobForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role || !formData.date) return;
    await createJob(formData);
    setFormData({
      company: "",
      role: "",
      status: "Applied",
      date: "",
      link: "",
    });
    window.location.reload();
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Role"
        className="border p-2 rounded"
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="url"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="Application Link"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
