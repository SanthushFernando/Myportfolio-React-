import HomePage from './screens/HomePage';
import AboutUsPage from './screens/AboutUsPage';
import NetworkPage from './screens/NetworkPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

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

         <section id="4">
          <div className="columns mt-6 pt-6">
            
            <div className="column is-one-third"><button className="but"><p className="about">Achievements</p></button>
            <img  className="me"src="Group 8.png" />
            </div>
            <div className="column"><img className="me8" src="Group 9.png" /></div>
            <div className="column"><img className="me9" src="Group 16.png" /></div>
          </div>

         </section>

         <section id="5">
          <br /><br /><br /><br />
          <button className="but mt-6"><p className="about">Contact</p></button>
          <div className="container">
            <img  className="con" src="contact.webp" />
            <div className="tl"><p className="lasthed">Get In Touch with Me!</p></div><br /><br />
            <div className="tm"><img className="logo" src="flogo.png" /><a className="fword" href="https://www.facebook.com/santhush.fernando.37?mibextid=ZbWKwL">Santhush Fernando</a></div>
             <div className="mm"><img className="insta" src="Insta.jpg" /><a className="iword" href="https://instagram.com/_.wolfyy._?igshid=ZmZhODViOGI= ">_.wolfyy._</a></div>
             <div className="md"><img className="mail" src="mail.jpg" /><a className="mword" href="mailto:santhushfernando2000@gmail.com">santhushfernando2000@gmail.com</a></div>
             <div className="tr"><img className="contact" src="contact.jpg" /><a className="cword" href="https://wa.me/+94776678909">+94 112 708 981</a></div>
             <div className="mr"><img className="loc" src="loc.png" /><a className="lword" href="https://goo.gl/maps/cLRpMV5kRheCT6YP9">Colombo,Sri Lanka</a></div>
            </div>
         </section>
    
</div>
  );
 
  }
export default App;
