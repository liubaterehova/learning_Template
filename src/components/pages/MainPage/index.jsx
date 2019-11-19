// @flow
import * as React from 'react';
import { Card,Typography, List  } from 'antd';
import "./style.css";

const { Title, Text } = Typography;

class MainPage extends React.Component {

  state={
    error:false
  };

  componentDidCatch(error, info)
  {
    this.setState({error:true})
  }

  componentDidMount()
  {
    this.props.getFilms();
  }


  render() {
    const {error} =this.state;
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
                    <Card className='MainPage-card' title={<Title level={3}>{el.title}</Title>}  >
                      <Title level={4}>Director: {el.director}</Title>
                      <Title level={4}>Release date: {el.release_date}</Title>
                      <Title level={4}>Rating: {el.rt_score}</Title>
                      <Title level={4}>Description</Title>
                      <Text>{el.description}</Text>
                    </Card>
                  </List.Item>
                )}
              />
                
          </div>
        }
      </div>
    );
  }
}

export default MainPage;
