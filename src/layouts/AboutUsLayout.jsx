import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import Question from "../AboutusComponent/Question";
import data from "../AboutusComponent/data";
import "../AboutusComponent/index.css";
import Team from "../AboutusComponent/Team";
import Header from "../AboutusComponent/Header";
import Footer from "../AboutusComponent/Footer";
import "../AboutusComponent/index.css";

export default function AboutUsLayout() {
  const [currentUser, setCurrentUser] = useState({});
  const [questions, setQuestions] = useState(data);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <>
      <div>
        <Topbar currentUser={currentUser} />
      </div>
      <Header/>
      <main>
        <div className="container">
          <h3>FAQs</h3>
          <section className="info">
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
        <Team/>
        <Footer/>
    </>
  );
}
