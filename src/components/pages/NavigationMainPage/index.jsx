import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Button type="dashed">
          <Link to="/main/people"> people </Link>
        </Button>
        <Button type="dashed">
          <Link to="/main"> films</Link>
        </Button>
      </div>
    );
  }
}

export default Navigation;
