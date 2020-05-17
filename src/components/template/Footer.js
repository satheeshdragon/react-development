import React, { Component } from "react";

class Footer extends Component {
  constructor(){
    super();
    this.state = {
        box_data : "Im Big box"
    }
  }
  render() {
    return (
        <div>

            {/* Footer */}
    <footer className="hun-section-footer hun-footer style-light layout-1">
      <div className="action-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="hun-element-heading--type-1 text-light align-center m-b-55">
                <h3 className="title">
                  Start Your Launch
                </h3>
                <div className="description">
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                </div>
              </div>
              <div className="text-center">
                <a href="#" className="hun-button size-large shape-round style-fill-color hover-light wow zoomIn" data-wow-delay="0.2s">
                  Buy Sotas Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="widget">
                <h3 className="title-widget">
                  About Sotas
                </h3>
                <div className="text-widget">
                  <p style={{maxWidth: '309px'}}>
                    5010 Stokes Isle Apt. 179, Venaville, New York 12390, United State
                  </p>
                  <p className="m-b-30">
                    Phone: <a href="#">(+1) 12 345 6789</a>
                    <br />
                    Email: <a href="#">info@yourdomain.com</a>
                  </p>
                  <div className="hun-element-social--type-1 ">
                    <a href="#" className="social-link"><i className="fa fa-facebook" /></a>
                    <a href="#" className="social-link"><i className="fa fa-instagram" /></a>
                    <a href="#" className="social-link"><i className="fa fa-pinterest-p" /></a>
                    <a href="#" className="social-link"><i className="fa fa-youtube-play" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xl-2">
              <div className="widget">
                <h3 className="title-widget">
                  Our Links
                </h3>
                <div className="text-widget">
                  <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Pricing</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xl-2">
              <div className="widget">
                <h3 className="title-widget">
                  Help
                </h3>
                <div className="text-widget">
                  <ul>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Clients</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="widget">
                <h3 className="title-widget">
                  Newsletter
                </h3>
                <div className="text-widget">
                  <div className="subscribe-form-01">
                    <div className="description-form">
                      Get a weekly digest of great articles
                    </div>
                    <form>
                      <input type="text" placeholder="email@example.com" />
                      <button>
                        Submit
                      </button>
                    </form>
                    <div className="note-form">
                      We'll never share your email address
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <div className="container">
          <div className="content-copyright">
            <div className="col-left">
              Copyright © 2020 All rights reserved
            </div>
            <div className="col-right">
              Sotas Template by <a href="#">HunThemes</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* end Footer */}

           
        </div>
    );
  }
}

export default Footer;