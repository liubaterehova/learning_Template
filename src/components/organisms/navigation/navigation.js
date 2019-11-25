import React, { Component } from "react";
import { Icon, Button } from "antd";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Button type="dashed">
          <Icon type="left" />
          <Link to="/main/navigation"> Navigation</Link>
        </Button>

        <Button type="dashed">
          <Link to="/main"> Main</Link>
        </Button>

        <Button type="dashed">
          <Link to="/main/people"> People</Link>
        </Button>
      </div>
    );
  }
}
