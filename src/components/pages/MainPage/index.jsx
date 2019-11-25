// @flow
import * as React from "react";

import { Card, Typography, List, Icon, Modal, Input, message } from "antd";
import "./style.css";

const { TextArea } = Input;
const { Title, Text } = Typography;

class MainPage extends React.Component {
  state = {
    visible: false,
    modalDescription: "",
    modalRate: 0,
    modalReleaseDate: null,
    modalDirector: "",
    modalId: null,
    modalTitle: ""
  };

  showModal = el => {
    this.setState({
      visible: true,
      modalDescription: el.description,
      modalRate: el.rt_score,
      modalReleaseDate: el.release_date,
      modalDirector: el.director,
      modalId: el.id,
      modalTitle: el.title
    });
  };

  handleOk = () => {
    const obj = {
      description: this.state.modalDescription,
      rt_score: this.state.modalRate,
      release_date: this.state.modalReleaseDate,
      title: this.state.modalTitle,
      director: this.state.modalDirector,
      id: this.state.modalId
    };

    this.props.onDescriptionChange(obj);
    //this.props.onRateChange(obj);
    this.setState({
      visible: false
    });
    message.info("Good guy");
  };

  handleCancel = e => {
    console.log("e");
    this.setState({
      visible: false
    });
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  componentDidMount() {
    console.log("this.propsMount", this.props);
    this.props.getFilms();
    console.log("arrayOfPeople", this.props.people);
  }

  render() {
    const { error } = this.state;
    return (
      <div className="MainPage">
        {/* <Navigation /> */}
        {error ? (
          <mark>УПс, ОшибОчка!</mark>
        ) : (
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={this.props.films}
            renderItem={el => (
              <List.Item>
                <Card
                  className="MainPage-card"
                  title={
                    <Title level={3}>
                      {el.title}
                      <Icon
                        type="edit"
                        onClick={() => this.showModal(el)}
                        //this.showModalDescription(el)
                      />
                    </Title>
                  }
                >
                  <Title level={4}>Director: {el.director}</Title>
                  <Title level={4}>Release date: {el.release_date}</Title>
                  <Title level={4}>Rating: {el.rt_score}</Title>
                  <Title level={4}>Description </Title>

                  <Text>{el.description}</Text>
                </Card>
              </List.Item>
            )}
          />
        )}
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea
            onChange={e => this.setState({ modalDescription: e.target.value })}
            value={this.state.modalDescription}
          >
            {this.state.modalDescription}
          </TextArea>
          <TextArea
            onChange={e => this.setState({ modalDirector: e.target.value })}
            value={this.state.modalDirector}
          ></TextArea>
          <TextArea
            onChange={e => this.setState({ modalTitle: e.target.value })}
            value={this.state.modalTitle}
          ></TextArea>
          <TextArea
            onChange={e => this.setState({ modalRate: e.target.value })}
            value={this.state.modalRate}
          ></TextArea>
        </Modal>
      </div>
    );
  }
}

export default MainPage;
