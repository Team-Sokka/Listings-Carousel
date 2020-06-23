import axios from 'axios';
import React from 'react';
import Listings from './listings.jsx';
import ReactDOM from 'react-dom';


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
    var dbData;
    axios.get('/listings')
    .then((response) => {
      dbData = response.data;
      this.setState({
        listings: dbData
      })
      console.log(this.state.listings[0].imageUrl);
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
         <h1>Listings</h1>
          <div>
            <Listings listings={this.state.listings} name="currentListing" />
          </div>
      </div>
    );
  }
}

export default App;
