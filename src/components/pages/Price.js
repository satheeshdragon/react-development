import React, { Component } from "react";


class Price extends Component {
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
    document.title = "Price";   
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
          Pricing
        </h2>
        <ul className="breadcrumbs">
          <li>
            <a href="#">
              <span>Home</span>
            </a>
            <span className="breadcrumb-divider" />
          </li>
          <li>
            <span> Pricing</span>
          </li>
        </ul> 
      </div>
    </div>
  </div>
  {/* end Page Title */}
  {/* Pricing Plans */}
  <div className="hun-section-pricing-plans layout-1 set-bg-light p-t-120 p-b-100">
    <div className="inner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 pb-0">
            <div className="hun-element-heading--type-1 align-center m-b-75">
              <h3 className="title">
                Choose Your Best Plan
              </h3>
              <div className="description">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-center">
          <div className="col-md-10 col-lg-4">
            <div className="item-pricing">
              <div className="head-item">
                <h3 className="title-pricing">
                  Basic
                </h3>
                <div className="price-pricing">
                  <span className="currency">$</span>39
                </div>
                <div className="info-pricing">
                  Per user, per month
                </div>
              </div>
              <div className="body-item">
                <ul className="list-options">
                  <li className="yes">Unlimited Websites</li>
                  <li className="yes">Unlimited SSD Storage</li>
                  <li className="yes">Unlimited Email Accounts</li>
                  <li className="no">Free SSL Certificate</li>
                  <li className="no">Free Automatic Backups</li>
                </ul>
              </div>
              <div className="buttons-pricing">
                <a href="#" className="button">
                  Get Basic
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-4">
            <div className="item-pricing feature-item">
              <div className="head-item">
                <h3 className="title-pricing">
                  Premium
                </h3>
                <div className="price-pricing">
                  <span className="currency">$</span>59
                </div>
                <div className="info-pricing">
                  Per user, per month
                </div>
                <div className="label-pricing">
                  Best Offer
                </div>
              </div>
              <div className="body-item">
                <ul className="list-options">
                  <li className="yes">Unlimited Websites</li>
                  <li className="yes">Unlimited SSD Storage</li>
                  <li className="yes">Unlimited Email Accounts</li>
                  <li className="yes">Free SSL Certificate</li>
                  <li className="no">Free Automatic Backups</li>
                </ul>
              </div>
              <div className="buttons-pricing">
                <a href="#" className="button">
                  Get Premium
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-4">
            <div className="item-pricing">
              <div className="head-item">
                <h3 className="title-pricing">
                  Advanced
                </h3>
                <div className="price-pricing">
                  <span className="currency">$</span>69
                </div>
                <div className="info-pricing">
                  Per user, per month
                </div>
              </div>
              <div className="body-item">
                <ul className="list-options">
                  <li className="yes">Unlimited Websites</li>
                  <li className="yes">Unlimited SSD Storage</li>
                  <li className="yes">Unlimited Email Accounts</li>
                  <li className="yes">Free SSL Certificate</li>
                  <li className="yes">Free Automatic Backups</li>
                </ul>
              </div>
              <div className="buttons-pricing">
                <a href="#" className="button">
                  Get Advanced
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end Pricing Plans */}
  {/* FAQ */}
  <div className="hun-section-faq layout-1 set-bg-dark p-t-120 p-b-10">
    <div className="inner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 pb-0">
            <div className="hun-element-heading--type-1 text-light align-center m-b-75">
              <h3 className="title">
                Answers And Questions
              </h3>
              <div className="description">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 p-b-120">
            <div className="hun-element-accordion--type-1">
              <div className="accordion-list js-call-accordion">
                <div className="item-list js-dropdown active-dropdown">
                  <h4 className="title-item js-toggle-dropdown">
                    How to Purchase Extend Licence of this Product?
                  </h4>
                  <div className="description-item js-dropdown-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="item-list js-dropdown">
                  <h4 className="title-item js-toggle-dropdown">
                    How browsing and membership works
                  </h4>
                  <div className="description-item js-dropdown-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="item-list js-dropdown">
                  <h4 className="title-item js-toggle-dropdown">
                    How to Manage your Own Dashboard?
                  </h4>
                  <div className="description-item js-dropdown-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="item-list js-dropdown">
                  <h4 className="title-item js-toggle-dropdown">
                    Can I upgrade later on?
                  </h4>
                  <div className="description-item js-dropdown-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="item-list js-dropdown">
                  <h4 className="title-item js-toggle-dropdown">
                    Can my company request a custom plan?
                  </h4>
                  <div className="description-item js-dropdown-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 p-b-120 pl-lg-5">
            <div className="hun-element-form--type-1">
              <form>
                <label>
                  <span className="name-field">
                    Your Name
                  </span>
                  <input type="text" placeholder="Type here" />
                </label>
                <label>
                  <span className="name-field">
                    Your Email
                  </span>
                  <input type="text" placeholder="info@example.com" />
                </label>
                <label>
                  <span className="name-field">
                    Your Question
                  </span>
                  <textarea defaultValue={""} />
                </label>
                <button>
                  Send Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end FAQ */}
  {/* Testimonial */}
  <div className="hun-section-testimonial layout-2 p-t-120 p-b-75">
    <div className="inner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="hun-element-heading--type-1 align-center m-b-75">
              <h3 className="title">
                Customers Say
              </h3>
              <div className="description">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
              </div>
            </div>
          </div>
        </div>
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



    );
  }
}

export default Price;
