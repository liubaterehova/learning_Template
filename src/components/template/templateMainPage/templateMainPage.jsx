import React, { Component } from "react";
import Navigation from "../../organisms/navigation";
import MainPage from "../../../containers/MainPage";

export default class TemplateMainPage extends Component {
  render() {
    return (
      <div>
        <Navigation {...this.props} />
        <MainPage {...this.props} />
      </div>
    );
  }
}
