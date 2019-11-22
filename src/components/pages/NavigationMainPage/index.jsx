import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/main/people"> people</Link>
        <Link to="/main/films">films</Link>
      </div>
    );
  }
}

export default Navigation;
