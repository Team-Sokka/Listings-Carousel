import axios from 'axios';
import React from 'react';
// import ReactDOM from 'react-dom';
import ListingsView from './listingsView.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listings: [],
    }
  }

  componentDidMount(props) {
    var urlParams = new URLSearchParams(window.location.search);
    var myId = urlParams.get('id');
    axios.get(`http://127.0.0.1:8003/listings/${myId}`)
    .then((response) => {
      this.setState({
        listings: response.data
      })
    })
    .catch(err => 'error');
  }

  render() {
    return (
      <div>
        <ListingsView listings={this.state.listings} />
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('listingsNear'));

export default App;

