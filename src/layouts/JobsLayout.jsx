import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import Header from "../jobsComponents/Header";
import JobList from "../jobsComponents/JobsList";
import "../jobsComponents/style.css";

export default function JobsLayout() {
    const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser); 
  }, []);

  return (
    <>
    <div>
      <Topbar currentUser={currentUser} />
      </div>
      <div className="jobs">
      <Header />
      <JobList />
    </div>
    </>
  );
}