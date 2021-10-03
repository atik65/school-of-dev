import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
