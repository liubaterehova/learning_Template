import * as React from "react";
import { Card, Typography, List, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import Navigation from "../../organisms/navigation";
const { Title } = Typography;

class GhibliPeople extends React.Component {
  state = {
    id: null,
    name: "",
    gender: "",
    age: null,
    eye_color: "",
    hair_color: ""
  };

  componentDidCatch(error, info) {}

  componentDidMount() {
    console.log("componentDidMount");
    this.props.getPeople();
  }
  componentWillUnmount() {
    console.log("componentwillunmount");
    this.props.cleanPeople();
    console.log("props", this.props);
  }
  render() {
    return (
      <div>
        <Navigation />
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={this.props.people}
          renderItem={el => (
            <List.Item>
              <Card
                className="MainPage-card"
                title={
                  <Title level={3}>
                    {el.name}
                    <Icon
                      type="edit"
                      onClick={() => this.showModal(el)}
                      //this.showModalDescription(el)
                    />
                  </Title>
                }
              >
                <Title level={4}>Gender: {el.gender}</Title>
                <Title level={4}>Age: {el.age}</Title>
                <Title level={4}>Eye color: {el.eye_color}</Title>
                <Title level={4}>Hair color: {el.hair_color} </Title>
              </Card>
               
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default GhibliPeople;
