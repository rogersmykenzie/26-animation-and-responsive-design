import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "menu-close"
    };
  }
  handleClick = e => {
    if (this.state.menuStatus === "menu-close") {
      this.setState({ menuStatus: "menu-open" });
    } else {
      this.setState({ menuStatus: "menu-close" });
    }
  };
  render() {
    return (
      <>
        <nav>
          <h1>Start Bootstrap</h1>
          <img
            src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"
            alt="ham_menu"
            onClick={this.handleClick}
          />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <menu id="menu" className={this.state.menuStatus}></menu>
      </>
    );
  }
}

export default App;
