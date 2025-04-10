import React from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./JobTracker.css";

function App() {
  return (
    <main className="job-container">
      <header className="job-header">
        <h1 className="header-title">🎯 Student Job Tracker</h1>
        <p className="header-subtitle">
          Track your job applications efficiently and stay organized on your
          career path.
        </p>
      </header>

      <section className="job-form-section">
        <JobForm />
      </section>

      <section className="job-list-section">
        <JobList />
      </section>
    </main>
  );
}

export default App;
