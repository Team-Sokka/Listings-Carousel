
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
          //  <div>{listing.price}</div>
        )}
    </div>
    )
  }
};

 export default Listings;



