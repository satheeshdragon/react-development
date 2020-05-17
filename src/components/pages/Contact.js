import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Contact extends Component {
  

componentDidMount(){
    //An array of assets
    let scripts = [
        { src: "assets/libs/jquery/jquery-3.4.1.min.js" },
        { src: "assets/libs/bootstrap/popper.js" },
        { src: "assets/libs/bootstrap/bootstrap.min.js" },
        { src: "assets/libs/slick/slick-1.9.0.js" },
        { src: "assets/libs/magnific-popup/jquery.magnific-popup.min.js" },
        { src: "assets/libs/animsition/animsition.min.js" },
        { src: "assets/libs/parallax100/parallax100.js" },
        { src: "assets/libs/countdowntime/moment.min.js" },
        { src: "assets/libs/countdowntime/moment-timezone.min.js" },
        { src: "assets/libs/countdowntime/moment-timezone-with-data.min.js" },
        { src: "assets/libs/countdowntime/countdowntime.js" },
        { src: "assets/libs/sticky-sidebar/theia-sticky-sidebar.js" },
        { src: "assets/libs/waypoint/jquery.waypoints.min.js" },
        { src: "assets/libs/countterup/jquery.counterup.min.js" },
        { src: "assets/libs/wow/wow.min.js" },
        { src: "assets/js/main.js" },
    ]
    //Append the script element on each iteration
    scripts.map(item => { 
        const script = document.createElement("script")
        script.src = item.src
        script.async = true
        document.body.appendChild(script)
    })

     document.title = "Contact";


    
 }

  render() {
    return (
      <div>
  {/* Page Title */}
  <div className="hun-section-page-title layout-1 hide-breadcrumbs no-parallax">
    <div className="inner-section">
      <div className="bg-img parallax100"><span className="inner-parallax" style={{backgroundImage: 'url(assets/images/bg-01.jpg)'}} /></div>
      <div className="container">
        <h2 className="main-title">
          Contact
        </h2>
        <ul className="breadcrumbs">
          <li>
            <a href="#">
              <span>Home</span>
            </a>
            <span className="breadcrumb-divider" />
          </li>
          <li>
            <span> Contact</span>
          </li>
        </ul> 
      </div>
    </div>
  </div>
  {/* end Page Title */}
  {/* Contact */}
  <div className="hun-section-contact layout-1 p-t-130 p-b-130">
    <div className="inner-section">
      <div className="container">
        <div className="map-sec">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.6214946526857!2d-73.65094340061779!3d40.77867185695751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c287d7029cf777%3A0xb67c29fa479631c5!2sWillis%20Ave%20%2B%20Hillturn%20La!5e0!3m2!1sen!2s!4v1578216554407!5m2!1sen!2s" allowFullScreen />
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="text-sec">
              <h3 className="title-sec">
                Get in Touch
              </h3>
              <div className="content-contact">
                <div className="description max-w-400">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <ul className="list-contact">
                  <li>
                    <i className="ion-android-call" />
                    <a href="#">(+1) 12 345 6789</a>
                  </li> 
                  <li>
                    <i className="ion-android-mail" />
                    <a href="#">info@yourdomain.com</a>
                  </li> 
                  <li>
                    <i className="ion-android-globe" />
                    <a href="#">https://sotas.com/</a>
                  </li> 
                  <li>
                    <i className="ion-android-pin" />
                    5010 Stokes Isle Apt. 179, New York
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hun-element-form--type-2">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <input className="input-field" type="text" placeholder="Name *" />
                  </div>
                  <div className="col-sm-6">
                    <input className="input-field" type="text" placeholder="E-mail *" />
                  </div>
                  <div className="col-sm-6">
                    <input className="input-field" type="text" placeholder="Company" />
                  </div>
                  <div className="col-sm-6">
                    <input className="input-field" type="text" placeholder="Phone" />
                  </div>
                  <div className="col-12">
                    <textarea className="input-field" placeholder="Your Message *" defaultValue={""} />
                    <button>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  </div>
  {/* end Contact */}
</div>


    );
  }
}

export default Contact;
