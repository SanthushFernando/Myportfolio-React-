import React from 'react';
import "./index.css";


function About() {

    
    return (
        <div>
            <section id="2">
      <div className="columns">
        <div className="column is-two-fifths"><button className="but"><p className="about">About me</p></button><br /><br /><br />
          <img className="circle" src="Ellipse 4.png" /></div>
          
        <div className="column"> <p className="p1">I ‘m an undergraduate Student at UCSC who is doing Information System.<br />
          I have more than 2 years of experience as a Freelancer at Fiverr.<br /> 
          Mainly I design and develop Websites and I’m a part -time Digital marketer</p>
          <div className="columns">
            <div className="column is-half"><p className="big mt-6"><b>Name:</b> Santhush Fernando <br  /><b>Age:</b> 22<br /><b>Address:</b> Colombo,Sri Lanka<br /><b>Email:</b><a href="mailto:santhushfernando2000@gmail.com"> santhushfernando2000@gmail.com</a></p></div>
            <div className="column"><p className="big mt-6"><b>University:</b> University of Colombo<br /><b>GitHub:</b><a href="https://github.com/SanthushFernando"> @SanthushFernando</a></p></div>
            
          </div>
        
        </div>
        
      </div>
      </section>
        </div>
    );
}

export default About;