import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import PageNotFound from "./components/error/PageNotFound";
import CourseDetails from "./components/courseDetails/CourseDetails";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses/:userid" component={CourseDetails} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/aboutus" component={AboutUs} />

          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
