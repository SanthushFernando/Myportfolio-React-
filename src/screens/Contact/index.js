import React from 'react';
import "./index.css";

function Contact() {

    return (
        <div>
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

export default Contact;  