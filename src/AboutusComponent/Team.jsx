import React from 'react';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: "Ruthrapriya",
    role: "Team Member",
    description: "Ruthrapriya is an ECE Student who's Passionate about the synergy of IoT and Embedded Systems.Hands-on experience in Cloud-based projects. Eager to contribute my skills in creating innovative, connected solutions. Committed to continuous learning and collaborative exploration in reshaping how we interact with technology.",
    image: "https://img.freepik.com/premium-vector/portrait-brunette-woman-avatar-female-person-vector-icon-adult-flat-style_605517-159.jpg", // Add team member image URL
  },
  {
    id: 2,
    name: "Chaitanya",
    role: "Team Member",
    description: " Chaitanya is an student deeply pasionate about software development, with a focus on the MERN stack (MongoDB, Express.js, React, Node.js) and a keep interest in AI and ML.Currently pursuaing BS in Computer science.",
    image: "https://www.shareicon.net/download/2016/06/26/786558_people_512x512.png", // Add team member image URL
  },
  {
    id: 3,
    name: "Hari",
    role: "Team Member",
    description: "Hari is pursuing B.Tech. Information Technology at Sri Sairam Engineering College, Chennai. I'm a DevOps Enthusiast and passionate about contribution to the open-source community.",
    image: "https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg", // Add team member image URL
  },
  {
    id: 4,
    name: "Anjali",
    role: "Team Member",
    description: "Jane is a dedicated educator who believes in the power of continuous learning. With expertise in...",
    image: "https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-25.jpg?w=2000", // Add team member image URL
  },
  // Add more team members
];

const Team = () => {
  return (
    <div className="team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;