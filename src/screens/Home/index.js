import React from 'react';
import "./index.css";

function Home() {

    return (
        <div>
    <section id="1">
      
          <div className="columns">
            <div className="column is-half">
              <ul>
                <li><a href="#1">Home</a></li>
                <li><a href="#2">About</a></li>
                <li><a href="#3">Education</a></li>
                <li><a href="#4">Achievements</a></li>
                <li><a href="#5">Contact</a></li>
              </ul>
              
             <p className="hed">HELLO!<br />My name is<br /><span>Santhush</span></p>
             <br /><p className="para pl-6"> Web Developer | Freelancer</p><br /><p className="seg pl-6"> I Design websites and Develop them as you wish<br />
               Need a Digital marketer? Here I am.</p>
            </div>
            <div className="column pr-0">
                <img src="profile.png" />
                
            </div>
            
          </div>
    </section>
    </div>
    );
}

export default Home;  