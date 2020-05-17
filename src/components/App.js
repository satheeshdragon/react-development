import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Mainpage from "./pages/Mainpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Price from "./pages/Price";
// import Api from "./pages/Api";
// import E_view from "./pages/Excer_view";
// import E_edit from "./pages/Excer_edit";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

export default function App() {
  return (
    <div>
      {/* <Header />
      <Mainpage />      
      <Footer /> */}

      <Router history={history}>
        <div>
        <div className="hun-page">
          <Header />

          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Price" component={Price} />
            {/*<Route exact path="/Api" component={Api} />
            <Route exact path="/E_view" component={E_view} />
            <Route exact path="/E_edit/:id" component={E_edit} />*/}
          </Switch>
          <Footer name={"satheesh_data_probs"} />
        </div>
        </div>
      </Router>
    </div>
  );
}
