
import React from 'react';
import App from './App.jsx';

class Listings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>{this.props.listings.map((listing) =>
         <div><img src={listing.imageUrl}></img> </div>
          //  <div>{listing.price}</div> this is where I need to fix mapping to get all data related to each listing to render
        )}
    </div>
    )
  }
};

 export default Listings;



