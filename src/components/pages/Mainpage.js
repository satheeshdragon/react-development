import React, { Component } from "react";
import Script from 'react-script-tag';


class Mainpage extends Component {
  constructor(){
    super(); 

    this.state = {
        persons: [],
        countrys: [],
    }
  }

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

    document.title = "Home";   
 }

  render() {
    return (
       <div>

       <div>

    {/* Main Slider */}
    <div className="hun-section-mainslider layout-1 m-b-140">
      <div className="inner-section">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 col-text">
              <div className="text-slider">
                <h2 className="title-slider">
                  Great features with the Sotas
                </h2>
                <div className="description-slider">
                  Lorem ipsum Sunt cupidatat reprehenderit ornare reprehenderit incididunt consequat aute et ornare proident.
                </div>
                <div className="buttons-slider">
                  <a href="#" className="btn-slide fill-style">
                    View Demos
                  </a>
                  <a href="#" className="btn-slide border-style">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-pic">
              <div className="pic-slider">
                <div className="inner-pic">
                  <div className="slide-pic js-call-slick">
                    <div className="slide-slick" data-slick="{&quot;fade&quot;: true, &quot;speed&quot;: 800, &quot;dots&quot;: false, &quot;arrows&quot;: true, &quot;autoplay&quot;: true, &quot;autoplaySpeed&quot;: 5000, &quot;infinite&quot;: true, &quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1}">
                      <div className="item-slick" style={{backgroundImage: 'url(assets/images/single-jpg-08.jpg)'}} />
                      <div className="item-slick" style={{backgroundImage: 'url(assets/images/single-jpg-05.jpg)'}} />
                    </div>
                    <div className="arrows-slick">
                      <a className="item-arrow prev-slick" />
                      <a className="item-arrow next-slick" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Main Slider */}
    {/* Heading */}
    <div className="hun-section-heading layout-1 m-b-120">
      <div className="inner-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="hun-element-heading--type-1 align-center">
                <h3 className="title">
                  Start With Sotas
                </h3>
                <div className="description">
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Heading */}
    {/* Image Text */}
    <div className="hun-section-image-text layout-1 style-2 m-b-130 overflow-hidden">
      <div className="inner-section">
        <div className="container">
          <div className="row justify-content-center row-sec">
            <div className="col-md-10 col-lg-6 col-pic">
              <div className="pic-sec">
                <div className="inner-pic">
                  <img src="assets/images/single-jpg-02.jpg" alt="IMG" />
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-6 col-text">
              <div className="symbol-list">
                <div className="item-list wow fadeInRight" data-wow-delay="0.2s">
                  <div className="icon-item">
                    <i className="ion-android-person" />
                  </div>
                  <div className="text-item">
                    <h4 className="title-item">
                      Create account
                    </h4>
                    <div className="description-item">
                      <p>
                        Accumsan at ipsum velit. Nam nec tellus a odio tincun an auctor. Class aptent taciti litora torquent per idunt auctor aoi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-list wow fadeInRight" data-wow-delay="0.4s">
                  <div className="icon-item">
                    <i className="ion-android-create" />
                  </div>
                  <div className="text-item">
                    <h4 className="title-item">
                      Start creating
                    </h4>
                    <div className="description-item">
                      <p>
                        Accumsan at ipsum velit. Nam nec tellus a odio tincun an auctor. Class aptent taciti litora torquent per idunt auctor aoi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-list wow fadeInRight" data-wow-delay="0.6s">
                  <div className="icon-item">
                    <i className="ion-android-share-alt" />
                  </div>
                  <div className="text-item">
                    <h4 className="title-item">
                      Share and enjoy
                    </h4>
                    <div className="description-item">
                      <p>
                        Accumsan at ipsum velit. Nam nec tellus a odio tincun an auctor. Class aptent taciti litora torquent per idunt auctor aoi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Image Text */}
    {/* Image Text */}
    <div className="hun-section-image-text layout-1 style-2 reverse p-b-130 overflow-hidden">
      <div className="inner-section">
        <div className="container">
          <div className="row justify-content-center row-sec">
            <div className="col-md-10 col-lg-6 col-pic">
              <div className="pic-sec">
                <div className="inner-pic">
                  <img src="assets/images/single-jpg-03.jpg" alt="IMG" />
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-6 col-text">
              <div className="heading-sec">
                <h3 className="title-sec">
                  Save tons on design and development
                </h3>
                <div className="description-sec max-w-400">
                  Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                </div>
              </div>
              <div className="accordion-list js-call-accordion">
                <div className="item-list js-dropdown active-dropdown wow fadeInLeft" data-wow-delay="0.2s">
                  <h4 className="title-item js-toggle-dropdown">
                    Fully Responsive
                  </h4>
                  <div className="description-item js-dropdown-content">
                    <p>
                      Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                    </p>
                  </div>
                </div>
                <div className="item-list js-dropdown wow fadeInLeft" data-wow-delay="0.4s">
                  <h4 className="title-item js-toggle-dropdown">
                    Multiple Layouts
                  </h4>
                  <div className="description-item js-dropdown-content">
                    <p>
                      Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Image Text */}
    {/* Card */}
    <div className="hun-section-card layout-1 set-bg-light clip-top-bg p-t-120 p-b-100">
      <div className="inner-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 pb-0">
              <div className="hun-element-heading--type-1 align-center m-b-75">
                <h3 className="title">
                  Sotas In Use
                </h3>
                <div className="description">
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="item-card">
                <div className="pic-card">
                  <a href="case-detail.html"><img src="assets/images/card-01.jpg" alt="IMG" /></a>
                  <span className="brand">
                    <img src="assets/images/icons/brand-01.png" alt="IMG" />
                  </span>
                </div>
                <div className="text-card">
                  <h4 className="title-card">
                    <a href="case-detail.html">New Company</a>
                  </h4>
                  <div className="description-card">
                    Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt.
                  </div>
                  <a href="case-detail.html" className="link-card">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="item-card">
                <div className="pic-card">
                  <a href="case-detail.html"><img src="assets/images/card-03.jpg" alt="IMG" /></a>
                  <span className="brand">
                    <img src="assets/images/icons/brand-02.png" alt="IMG" />
                  </span>
                </div>
                <div className="text-card">
                  <h4 className="title-card">
                    <a href="case-detail.html">New Company</a>
                  </h4>
                  <div className="description-card">
                    Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt.
                  </div>
                  <a href="case-detail.html" className="link-card">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="item-card">
                <div className="pic-card">
                  <a href="case-detail.html"><img src="assets/images/card-02.jpg" alt="IMG" /></a>
                  <span className="brand">
                    <img src="assets/images/icons/brand-03.png" alt="IMG" />
                  </span>
                </div>
                <div className="text-card">
                  <h4 className="title-card">
                    <a href="case-detail.html">New Company</a>
                  </h4>
                  <div className="description-card">
                    Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt.
                  </div>
                  <a href="case-detail.html" className="link-card">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Card */}
    {/* Icon-box */}
    <div className="hun-section-icon-box layout-1 set-bg-dark p-t-120 p-b-100 m-b-120">
      <div className="inner-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 pb-0">
              <div className="hun-element-heading--type-1 align-center m-b-75">
                <h3 className="title">
                  Our Features
                </h3>
                <div className="description">
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.2s">
              <div className="item-icon-box">
                <div className="icon-item">
                  <i className="ion-shuffle" />
                </div>
                <a href="#" className="link-item" />
                <div className="text-item">
                  <h4 className="title-item">
                    Fully Responsive
                  </h4>
                  <div className="description-item">
                    Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.3s">
              <div className="item-icon-box">
                <div className="icon-item">
                  <i className="ion-social-buffer" />
                </div>
                <a href="#" className="link-item" />
                <div className="text-item">
                  <h4 className="title-item">
                    Multiple Layouts
                  </h4>
                  <div className="description-item">
                    Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.6s">
              <div className="item-icon-box">
                <div className="icon-item">
                  <i className="ion-cube" />
                </div>
                <a href="#" className="link-item" />
                <div className="text-item">
                  <h4 className="title-item">
                    Modular Components
                  </h4>
                  <div className="description-item">
                    Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.7s">
              <div className="item-icon-box">
                <div className="icon-item">
                  <i className="ion-social-dropbox" />
                </div>
                <a href="#" className="link-item" />
                <div className="text-item">
                  <h4 className="title-item">
                    Suits Your Style
                  </h4>
                  <div className="description-item">
                    Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Icon-box */}
    {/* Heading */}
    <div className="hun-section-heading layout-1 m-b-75">
      <div className="inner-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="hun-element-heading--type-1 align-center">
                <h3 className="title">
                  Customers Say
                </h3>
                <div className="description">
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Heading */}
    {/* Testimonial */}
    <div className="hun-section-testimonial layout-2 m-b-110">
      <div className="inner-section">
        <div className="container">
          <div className="wrap-testimonial">
            <div className="slide-text js-call-slick" data-animate="false">
              <div id="text-tes-01" className="slide-slick" data-slick="{&quot;asNavFor&quot;: &quot;#ava-tes-01&quot;, &quot;centerMode&quot;: true, &quot;centerPadding&quot;: &quot;0px&quot;, &quot;focusOnSelect&quot;: true, &quot;adaptiveHeight&quot;: false, &quot;fade&quot;: false, &quot;speed&quot;: 500, &quot;dots&quot;: false, &quot;arrows&quot;: true, &quot;autoplay&quot;: false, &quot;autoplaySpeed&quot;: 5000, &quot;infinite&quot;: true, &quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1}">
                <div className="item-slick">
                  <div className="inner-item">
                    <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                      “Ut enim ad minima veniam, nisi ut aliquid ex ea como consequatur, quis nostrum exercitationem ullam corporis suscipit laboriosam? Quis autem vel eum iure”
                    </div>
                    <div className="star-tes" data-appear="zoomIn" data-delay={600}>
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </div>
                    <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                      <span className="name-author">Brenda Rose</span> - Developer
                    </div>
                  </div>
                </div>
                <div className="item-slick">
                  <div className="inner-item">
                    <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                      “Ut enim ad minima veniam, nisi ut aliquid ex ea como consequatur, quis nostrum exercitationem ullam corporis suscipit laboriosam? Quis autem vel eum iure”
                    </div>
                    <div className="star-tes" data-appear="zoomIn" data-delay={600}>
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </div>
                    <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                      <span className="name-author">Christine Wells</span> - Photography
                    </div>
                  </div>
                </div>
                <div className="item-slick">
                  <div className="inner-item">
                    <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                      “Ut enim ad minima veniam, nisi ut aliquid ex ea como consequatur, quis nostrum exercitationem ullam corporis suscipit laboriosam? Quis autem vel eum iure”
                    </div>
                    <div className="star-tes" data-appear="zoomIn" data-delay={600}>
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </div>
                    <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                      <span className="name-author">Joan Hansen</span> - Developer
                    </div>
                  </div>
                </div>
                <div className="item-slick">
                  <div className="inner-item">
                    <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                      “Ut enim ad minima veniam, nisi ut aliquid ex ea como consequatur, quis nostrum exercitationem ullam corporis suscipit laboriosam? Quis autem vel eum iure”
                    </div>
                    <div className="star-tes" data-appear="zoomIn" data-delay={600}>
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </div>
                    <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                      <span className="name-author">Diana Henry</span> - Photography
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-ava js-call-slick" data-animate="false">
              <div id="ava-tes-01" className="slide-slick" data-slick="{&quot;asNavFor&quot;: &quot;#text-tes-01&quot;, &quot;centerMode&quot;: true, &quot;centerPadding&quot;: &quot;0px&quot;, &quot;focusOnSelect&quot;: true, &quot;fade&quot;: false, &quot;speed&quot;: 500, &quot;dots&quot;: false, &quot;arrows&quot;: false, &quot;autoplay&quot;: false, &quot;autoplaySpeed&quot;: 5000, &quot;infinite&quot;: true, &quot;slidesToShow&quot;: 3, &quot;slidesToScroll&quot;: 1}">
                <div className="item-slick">
                  <div className="wrap-ava">
                    <img src="assets/images/tes-01.jpg" alt="IMG" />
                  </div>
                </div>
                <div className="item-slick">
                  <div className="wrap-ava">
                    <img src="assets/images/tes-02.jpg" alt="IMG" />
                  </div>
                </div>
                <div className="item-slick">
                  <div className="wrap-ava">
                    <img src="assets/images/tes-04.jpg" alt="IMG" />
                  </div>
                </div>
                <div className="item-slick">
                  <div className="wrap-ava">
                    <img src="assets/images/tes-03.jpg" alt="IMG" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Testimonial */}

 
</div>
       
       </div>
    );
  }
}

export default Mainpage;
