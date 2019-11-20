// @flow
import * as React from 'react';

import { Card, Typography, List, Icon, Modal, Input  } from 'antd';
import "./style.css";

const { TextArea } = Input;
const { Title, Text } = Typography;

class MainPage extends React.Component {

  state={
    error: false,
    visible: false,
    description: '',
    id:null,
  };
  

  showModal = (description, id) => {
    this.setState({
      visible: true,
      description,
      id
    });
  };

  handleOk = e => {
    this.props.onDescriptionChange(this.state.description, this.state.id);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  componentDidCatch(error, info)
  {
    this.setState({ error: true })
  }

  componentDidMount()
  {
    this.props.getFilms();
  }


  render() {
    console.log(this.props.films);
    const { error } = this.state;
    return (
      <div className="MainPage">
        {
          error
          ?<mark>УПс, ОшибОчка!</mark>
          :<div className='MainPage'>
              <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={this.props.films}
                renderItem={
                  (el) => (
                  <List.Item>
                    <Card className='MainPage-card' title={<Title level={3}>{el.title}
                    </Title>} >
                      <Title level={4}>Director: {el.director}</Title>
                      <Title level={4}>Release date: {el.release_date}</Title>
                      <Title level={4}>Rating: {el.rt_score}</Title>
                      <Title level={4}>Description <Icon type="edit"
                      
                                                         onClick={ () => this.showModal(el.description, el.id) } /></Title>
                     
                      <Text>{el.description}</Text>
                    </Card>
                  </List.Item>
                )}
              />
                
          </div>
        }
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea rows={4} onChange = {(e) => {
           this.setState({description: e.target.value,})
          }}>{this.state.description}</TextArea>
        </Modal>
      </div>
    );
  }
}

export default MainPage;
