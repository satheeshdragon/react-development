import React from "react";
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

      <title>SD</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="assets/images/icons/favicon-01.png" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/fonts/font-awesome-4/css/font-awesome.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/fonts/ionicons/css/ionicons.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/fonts/simple-line-icons/css/simple-line-icons.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/libs/bootstrap/bootstrap.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/libs/slick/slick-1.9.0.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/libs/magnific-popup/magnific-popup.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/libs/animate/animate.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/libs/animsition/animsition.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/libs/parallax100/parallax100.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="assets/css/style.css" />

          {/* Header */}
    <header className="hun-section-header hun-header layout-1 align-right style-sticky">
      <div className="container-header">
        <div className="wrap-element-stick">
          <div className="wrapper-header element-for-stick">
            <div className="container">
              <div className="logo-header">
                <NavLink className="text-logo" to="/">SotaS. </NavLink>
                <NavLink className="main-logo" to="/"> 
                  <img src="assets/images/icons/logo-01.png" alt="LOGO" />
                </NavLink>
                {/*<a href="home1.html" className="mobile-logo">
                  <img src="assets/images/icons/logo-01.png" alt="LOGO" />
                </a>*/}
                <NavLink className="mobile-logo" to="/"> 
                  <img src="assets/images/icons/logo-01.png" alt="LOGO" />
                </NavLink>
                <a href="home1.html" className="sticky-logo">
                  <img src="assets/images/icons/logo-01.png" alt="LOGO" />
                </a>
              </div>
              <nav className="main-navigation">
                <ul className="list-menu">
                  <li className="menu-item menu-item-has-children">
                    <NavLink to="/">Home </NavLink>                   
                  </li>
                  <li className="menu-item">
                  <NavLink to="/about">About </NavLink>
                    
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <NavLink to="/Price">Price </NavLink> 
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <NavLink to="/Blog">Blog </NavLink> 
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <NavLink to="/Contact">Contact </NavLink> 
                    
                  </li>
                </ul>
              </nav>
              <div className="group-feature">
                <div className="buttons-header">
                  <a href="#" className="hun-button size-small shape-round style-border-color hover-dark">
                    SD
                  </a>
                </div>
                <div className="hun-menu-mobile">
                  <a href="#" className="btn-toggle-menu"><span /></a>
                  <div className="mobile-navigation">
                    <nav className="mobile-menu">
                      <ul className="list-menu">
                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/">Homes </NavLink>       

                        </li>
                        <li className="menu-item">
                        <NavLink to="/about">About </NavLink>
                          
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/Price">Price </NavLink> 
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/Blog">Blog </NavLink> 
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/Contact">Contact </NavLink> 
                        </li>
                      </ul>
                    </nav>          
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* end Header */}
 
{/* <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Rr.v.0.4  </Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home </NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/Exer">Exer-Add</NavLink>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/E_view">E-View</NavLink>
    </Nav>
</Navbar>*/}

    </div>
  );
};

export default Header;
