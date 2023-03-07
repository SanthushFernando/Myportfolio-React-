import React from 'react';
import "./index.css";

function Education() {

    return (
        <div>
    <section id="3">
        <br /><br /><br />
        <button className="but"><p className="about">Education</p></button>
        <div className="container">
          <img  className="edu"src="edu.jpg" />
          <div className="top-left"><p className="edup">Bachelor’s Degree</p>
           <p className="edup2"> (university of Colombo)</p></div>
           <div className="bottom-left"><p className="edup">Secondary Education</p><p className="edup2">(2004-2019)</p></div>
           <div className="top-right"><p className="edup">Bsc. in Information Systems</p></div>
            <div className="top-rightdown"><p className="edup2">(currently Studying in 1st year)</p></div>
            <div className="bottom-right"><p className="edup">D.S Senanayake College Colombo -7</p></div>
            <div className="bottom-rightdown"><p className="edup2">passed Ordinary Level Exam with 9A passes</p></div>
            <div className="bottom-rightdown2"><p className="edup2">passed Advanced Level Exam with A,B,C Pases</p></div>
        </div>
         </section>
    </div>
    );
}

export default Education;  