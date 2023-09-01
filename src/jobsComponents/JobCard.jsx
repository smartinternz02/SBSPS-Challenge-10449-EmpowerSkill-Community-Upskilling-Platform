import React from 'react';
import "./style.css";



const JobCard = ({ job }) => {
  return (
    <div className="job-card">
        <div className='job-image'>
      <a href={job.careerPageUrl} target="_blank" rel="noopener noreferrer">
          <img src={job.image} alt={`${job.company} Logo`} />
        </a>
        </div>
      <div className="job-content">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default JobCard;