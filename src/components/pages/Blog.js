import React, { Component } from "react";
import axios from "axios";

class Blog extends Component {
  constructor(props){
    super(props); 

    this.dataDeleteAction = this.dataDeleteAction.bind(this);

    this.state = {
        exercises: [],
    }
  }

  componentDidUpdate() {
    axios.get('https://sdnodeapi.herokuapp.com/exercises/')
      .then(res => {
        const exercises = res.data;
        this.setState({ exercises });
      });
  }

  dataDeleteAction(id)
  {
    console.log(id);
    axios.delete('https://sdnodeapi.herokuapp.com/exercises//delete/'+id,)
      .then(res => {
        console.log(res.data);
      });
  }

  dire_fun(){
    this.props.history.push('/Exer');
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
    document.title = "Blog"; 

     axios.get('https://sdnodeapi.herokuapp.com/exercises/')
      .then(res => {
        const exercises = res.data;

        this.setState({ exercises });
      }); 

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
          Blog Grid
        </h2>
        <ul className="breadcrumbs">
          <li>
            <a href="#">
              <span>Home</span>
            </a>
            <span className="breadcrumb-divider" />
          </li>
          <li>
            <span> Blog Grid</span>
          </li>
        </ul> 
      </div>
    </div>
  </div>
  {/* end Page Title */}
  {/* Archive Blog */}
  <div className="hun-section-archive-blog layout-2 no-sidebar m-b-130">
    <div className="inner-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-content">
            <div className="content-sec">
              <div className="list-post row">
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-07.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">How business email can help your company</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-02.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">12 top tips to up your productivity game</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-08.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">How smartphone apps could save lives</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-07.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">How business email can help your company</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-02.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">12 top tips to up your productivity game</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-08.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">How smartphone apps could save lives</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-07.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">How business email can help your company</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-02.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">12 top tips to up your productivity game</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-xl-4">
                  <article className="hun-element-post--type-1">
                    <div className="pic-post">
                      <a href="blog-detail.html"><img src="assets/images/post-08.jpg" alt="IMG" /></a>
                      <span className="date-post">
                        25 Jun 2020
                      </span>
                    </div>
                    <div className="text-post">
                      <h4 className="title-post">
                        <a href="blog-detail.html">How smartphone apps could save lives</a>
                      </h4>
                      <div className="description-post">
                        Accumsan at ipsum velit. Nam nec tellus tincidunt auctor. Class aptent taciti litora torquent per idunt. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a mauris vitae elit. Class aptent taciti litora torquent per idunt auctor a ornare odio.
                      </div>
                      <a href="blog-detail.html" className="link-post">
                        Read more
                      </a>
                    </div>
                    <div className="info-post">
                      <span className="item-info">
                        <i className="ion-ios-person" /> 
                        <a href="#">Diana Henry</a>
                      </span>
                      <span className="item-info">
                        <i className="ion-android-folder-open" />
                        <a href="#">Design</a>, <a href="#">Software</a>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
              <div className="loop-pagination text-center">
                <ul>
                  <li>
                    <a className="next page-numbers" href="#"><i className="icon ion-chevron-left" /></a>
                  </li>
                  <li>
                    <span className="page-numbers current">1</span>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">2</a>
                  </li> 
                  <li>
                    <a className="page-numbers" href="#">3</a>
                  </li>
                  <li>
                    <a className="next page-numbers" href="#"><i className="icon ion-chevron-right" /></a>
                  </li>
                </ul>
              </div>

              <br/>
              <br/>
              <br/>

              <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
              {/*         */}
               <div className="loop-pagination text-center">
                  <table Classname="table">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>User name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      { 
                        this.state.exercises.map
                        (exercises => 
                          <tr>
                            <td>{exercises._id}</td>
                            <td>{exercises.username}</td>
                            <td>{exercises.description}</td>
                            <td>{exercises.duration}</td>
                            <td>{exercises.date}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
              </div>
      {/*          */}</div>
              <div className="col-md-1"></div>
              </div>
               


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end Archive Blog */}
</div>



    );
  }
}

export default Blog;
