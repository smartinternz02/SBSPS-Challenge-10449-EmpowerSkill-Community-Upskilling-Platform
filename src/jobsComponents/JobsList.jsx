import React, {useState} from 'react';
import JobCard from './JobCard';
import { jobsData } from '../data/jobsData';
import "./style.css";
const ITEMS_PER_PAGE = 4;

const JobList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalJobs = jobsData.length;
  const totalPages = Math.ceil(totalJobs / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const jobsToShow = jobsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="job-list">
      {jobsToShow.map(job => (
        <JobCard key={job.id} job={job} />
      ))}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobList;