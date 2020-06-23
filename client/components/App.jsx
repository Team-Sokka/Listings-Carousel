import axios from 'axios';
import React from 'react';
import ListingsView from './listingsView.jsx';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const left = '<';
const Button = styled.button`
  background: transparent;
  font-size: 1em;
  font-weight: bold;
  border-radius: 50%;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 10px;
  text-align: center;
`

// const AppButton = (props) => (

// )



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listings: [],
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(props) {
    axios.get('/listings')
    .then((response) => {
      this.setState({
        listings: response.data
      })
      // console.log(this.state.listings[0].imageUrl);
    })
  }

// handleChange (event) {
//   const target = event.target;
//   const value = target.value;
//   const name = target.name;

//   this.setState({
//     [name]: value,
//   });
// }

// handleSubmit (event){
//   event.preventDefault();
//   axios.post('/listings', {
//   })
//   .then(() => {
//     window.location.reload();
//   })
// }
  showListings (event) {
    const target = event.target;
    const id = target.id;
    const className = target.class;

  // this.setState({

  // })
}

  render() {
    return (
      <div>
         <h1>Homes for Sale Near 3859 Owena St</h1>
          <div>
            <Button>{'<'}</Button><br></br>
            <ListingsView listings={this.state.listings} name="currentListing" /><br></br>
            <Button>{'>'}</Button>
          </div>
      </div>
    );
  }
}

export default App;
