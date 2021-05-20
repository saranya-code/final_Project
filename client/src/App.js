import React, { useState, useEffect } from "react";
import "./pages/style.css";
import { HashRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavTop from "./components/NavTop/NavTop";
import Footer from "./components/Footer/Footer";
import ProductListPage from "./pages/ProductListPage";
import CheckOut from "./pages/Checkout";
import SignIn from "./pages/Signin";
// import Cart from "./pages/Cart";           Cart fx not ready yet--kl

function App() {
  // Setting global user logged in state
  const [signedIn, setSignedIn] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setSignedIn(loggedInUser);
    }
  }, []);

  return (
    // Put Products into state
    <Router>
      <NavTop user={signedIn}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/:category/productlist" component={ProductListPage} />
      <Route exact path="/checkout" component={CheckOut} />
      <Route exact path="/signin" render={(props) => <SignIn {...props} user={signedIn} setuser={setSignedIn}/> } />
      <Footer />
    </Router>
  );
}

export default App;
