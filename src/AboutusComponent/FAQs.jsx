import React, {useState} from "react";
import data from './data';
import SingleQuestion from './Question';


const FAQs = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>Questions and Answers about login</h3>
      <section className="info">
        {
          questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}/>
            );
          })
        }
      </section>
    </div>
  );
};

export default FAQs;
