import React, { Component } from "react";


class About extends Component {
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
    document.title = "About";
 }

  render() {
    return (
      <div>
  {/* Page Title */}
  <div className="hun-section-page-title layout-1 hide-breadcrumbs no-parallax m-b-130">
    <div className="inner-section">
      <div className="bg-img parallax100"><span className="inner-parallax" style={{backgroundImage: 'url(assets/images/bg-01.jpg)'}} /></div>
      <div className="container">
        <h2 className="main-title">
          About Us
        </h2>
        <ul className="breadcrumbs">
          <li>
            <a href="#">
              <span>Home</span>
            </a>
            <span className="breadcrumb-divider" />
          </li>
          <li>
            <span> About Us</span>
          </li>
        </ul> 
      </div>
    </div>
  </div>
  {/* end Page Title */}
  {/* Image Text */}
  <div className="hun-section-image-text layout-1 simple-image style-1 m-b-120">
    <div className="inner-section">
      <div className="container">
        <div className="row justify-content-center row-sec">
          <div className="col-md-10 col-lg-6 col-pic">
            <div className="pic-sec">
              <div className="inner-pic">
                <img className="border-rad-10" src="assets/images/single-jpg-10.jpg" alt="IMG" />
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-6 col-text align-self-center pb-lg-5">
            <div className="heading-sec">
              <h3 className="title-sec">
                We’re an aspiring team of coders and creatives
              </h3>
              <div className="description-sec max-w-420">
                Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor totam rem ornare odio.
              </div>
            </div>
            <ul className="normal-list">
              <li>Fully Responsive</li>
              <li>Multiple Layouts</li>
              <li>Modular Components</li>
              <li>Suits Your Style</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end Image Text */}
  {/* Image Text */}
  <div className="hun-section-image-text layout-1 simple-image style-1 reverse m-b-130">
    <div className="inner-section">
      <div className="container">
        <div className="row justify-content-center row-sec">
          <div className="col-md-10 col-lg-6 col-pic">
            <div className="pic-sec">
              <div className="inner-pic">
                <img className="border-rad-10" src="assets/images/single-jpg-11.jpg" alt="IMG" />
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-6 col-text align-self-center pb-lg-5">
            <div className="heading-sec">
              <h3 className="title-sec">
                We forge partnerships and build great products
              </h3>
              <div className="description-sec max-w-400">
                Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor. Class aptent taciti litora torquent per idunt auctor a ornare odio.
              </div>
            </div>
            <div className="counter-list">
              <div className="item-counter">
                <div className="number-counter">
                  <span className="js-counter">98</span>%
                </div>
                <div className="description-counter">
                  User Satisfaction
                </div>
              </div>
              <div className="item-counter">
                <div className="number-counter">
                  <span className="js-counter">24</span>/<span className="js-counter">7</span>
                </div>
                <div className="description-counter">
                  Support
                </div>
              </div>
              <div className="item-counter">
                <div className="number-counter">
                  <span className="js-counter">159</span>k+
                </div>
                <div className="description-counter">
                  Downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end Image Text */}
  {/* Testimonial */}
  <div className="hun-section-testimonial layout-1">
    <div className="inner-section">
      <div className="bg-sec parallax100"><span className="inner-parallax" style={{backgroundImage: 'url(assets/images/bg-01.jpg)'}} /></div>
      <div className="container">
        <div className="wrap-testimonial">
          <div className="slide-ava js-call-slick" data-animate="true">
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
          <div className="slide-text js-call-slick" data-animate="true">
            <div id="text-tes-01" className="slide-slick" data-slick="{&quot;asNavFor&quot;: &quot;#ava-tes-01&quot;, &quot;adaptiveHeight&quot;: true, &quot;fade&quot;: true, &quot;speed&quot;: 500, &quot;dots&quot;: false, &quot;arrows&quot;: false, &quot;autoplay&quot;: false, &quot;autoplaySpeed&quot;: 5000, &quot;infinite&quot;: true, &quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1}">
              <div className="item-slick">
                <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                  “Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam”
                </div>
                <div className="brand" data-appear="zoomIn" data-delay={600}>
                  <img src="assets/images/icons/brand-01-w.png" alt="IMG" />
                </div>
                <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                  <span className="name-author">Brenda Rose</span> - Manager
                </div>
              </div>
              <div className="item-slick">
                <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                  “Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam”
                </div>
                <div className="brand" data-appear="zoomIn" data-delay={600}>
                  <img src="assets/images/icons/brand-02-w.png" alt="IMG" />
                </div>
                <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                  <span className="name-author">Christine Wells</span> - Developer
                </div>
              </div>
              <div className="item-slick">
                <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                  “Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam”
                </div>
                <div className="brand" data-appear="zoomIn" data-delay={600}>
                  <img src="assets/images/icons/brand-03-w.png" alt="IMG" />
                </div>
                <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                  <span className="name-author">Joan Hansen</span> - Designer
                </div>
              </div>
              <div className="item-slick">
                <div className="content-tes" data-appear="fadeInUp" data-delay={0}>
                  “Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam”
                </div>
                <div className="brand" data-appear="zoomIn" data-delay={600}>
                  <img src="assets/images/icons/brand-05-w.png" alt="IMG" />
                </div>
                <div className="author-tes" data-appear="zoomIn" data-delay={1200}>
                  <span className="name-author">Diana Henry</span> - Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end Testimonial */}
  {/* counter */}
  <div className="hun-section-counter layout-1 set-bg-light p-t-120 p-b-115">
    <div className="inner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 pb-0">
            <div className="hun-element-heading--type-1 align-center m-b-75">
              <h3 className="title">
                Here are the numbers
              </h3>
              <div className="description">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-4">
            <div className="item-counter">
              <div className="number-counter">
                <span className="js-counter">98</span>%
              </div>
              <h4 className="title-counter">
                User Satisfaction
              </h4>
              <div className="description-counter">
                Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor.
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-4">
            <div className="item-counter">
              <div className="number-counter">
                <span className="js-counter">24</span>/<span className="js-counter">7</span>
              </div>
              <h4 className="title-counter">
                Support
              </h4>
              <div className="description-counter">
                Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor.
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-4">
            <div className="item-counter">
              <div className="number-counter">
                <span className="js-counter">159</span>k+
              </div>
              <h4 className="title-counter">
                Downloads App
              </h4>
              <div className="description-counter">
                Accumsan at ipsum velit. Nam nec tellus a odio tincidunt auctor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end counter */}
  {/* Team */}
  <div className="hun-section-team layout-1 p-t-120 p-b-100">
    <div className="inner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 pb-0">
            <div className="hun-element-heading--type-1 align-center m-b-75">
              <h3 className="title">
                Meet Our Team
              </h3>
              <div className="description">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="member">
              <div className="pic-member">
                <a href="#">
                  <img src="assets/images/team-01.jpg" alt="IMG" />
                </a>
              </div>
              <div className="text-member">
                <div className="social-links">
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-facebook" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-twitter" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-pinterest-p" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-linkedin" />
                  </a>
                </div>
                <h4 className="name-member">
                  <a href="#">
                    Mark Porter
                  </a>
                </h4>
                <div className="info-member">
                  General Manager
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="member">
              <div className="pic-member">
                <a href="#">
                  <img src="assets/images/team-02.jpg" alt="IMG" />
                </a>
              </div>
              <div className="text-member">
                <div className="social-links">
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-facebook" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-twitter" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-pinterest-p" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-linkedin" />
                  </a>
                </div>
                <h4 className="name-member">
                  <a href="#">
                    Laura Brady
                  </a>
                </h4>
                <div className="info-member">
                  Design Lead
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="member">
              <div className="pic-member">
                <a href="#">
                  <img src="assets/images/team-03.jpg" alt="IMG" />
                </a>
              </div>
              <div className="text-member">
                <div className="social-links">
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-facebook" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-twitter" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-pinterest-p" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-linkedin" />
                  </a>
                </div>
                <h4 className="name-member">
                  <a href="#">
                    Angela Kwang
                  </a>
                </h4>
                <div className="info-member">
                  Experience Designer
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="member">
              <div className="pic-member">
                <a href="#">
                  <img src="assets/images/team-04.jpg" alt="IMG" />
                </a>
              </div>
              <div className="text-member">
                <div className="social-links">
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-facebook" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-twitter" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-pinterest-p" />
                  </a>
                  <a href="#" className="item-social">
                    <i className="social-icon fa fa-linkedin" />
                  </a>
                </div>
                <h4 className="name-member">
                  <a href="#">
                    Cherlyn Long
                  </a>
                </h4>
                <div className="info-member">
                  SEO Consultant
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end Team */}
</div>

    );
  }
}

export default About;
