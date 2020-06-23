
import React from 'react';
import App from './App.jsx';
import Listing from './listing.jsx';

 class ListingsView extends React.Component {
  // change to functional component
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <span>{this.props.listings.map((listing) =>
         <img src={listing.imageUrl}></img>
          //  <div>{listing.price}</div>
        )}
    </span>
    )
  }
};

 export default ListingsView;



