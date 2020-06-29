import axios from 'axios';
import React from 'react';
import ListingsView from './listingsView.jsx';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MainWrapper = styled.div`
  // position: fixed;
  top: 20%;
  margin-right: 7%;
  margin-left: 7%;
`;

const Title = styled.div`
  color: #404040;
  font-weight: bold;
`;


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listings: [],
    }
  }

  componentDidMount(props) {
    axios.get('/listings')
    .then((response) => {
      this.setState({
        listings: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <MainWrapper>
          <Title>
          <h1>Homes for Sale Near 3859 Owena St</h1>
          </Title>
          <div>
            <ListingsView listings={this.state.listings} />
          </div>
        </MainWrapper>
      </div>
    );
  }
}

export default App;

