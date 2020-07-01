import axios from 'axios';
import React from 'react';
// import ReactDOM from 'react-dom';
import ListingsView from './listingsView.jsx';
import styled from 'styled-components';

const MainWrapper = styled.div`
  // position: fixed;
  top: 20%;
  // margin-right: 7%;
  // margin-left: 7%;
`;

const Title = styled.div`
  margin-left: 1%;
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
    var urlParams = new URLSearchParams(window.location.search);
    console.log(window.location.search);
    var myId = urlParams.get('id');
    axios.get(`http://127.0.0.1:8003/listings/${myId}`)
    .then((response) => {
      // console.log('Hey!');
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

// ReactDOM.render(<App />, document.getElementById('listingsNear'));

export default App;

