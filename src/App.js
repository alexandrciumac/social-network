import React from "react";
import Header from "./components/Header"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import Dialogs from "./components/Dialogs"
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div>
      <Route path="/profile" component={Profile} />
      <Route path="/dialogs" component={Dialogs} />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
