
// import React from 'react';
import React, { Fragment } from 'react'
import App from './App.jsx';
import Listing from './listing.jsx';
import styled from 'styled-components';

 class ListingsView extends React.Component {
   constructor(props){
     super(props);
   }

   render() {
     return (
      <span display="flex">{this.props.listings.map((listing) =>
        <Fragment>
          <img src={listing.imageUrl}></img>
          <h3>{listing.price}</h3>
          <h3>{listing.bedrooms}</h3>
          <h3>{listing.bathrooms}</h3>
          <h3>{listing.sqft}</h3>
          <h3>{listing.address}</h3>
        </Fragment>
          )}
      </span>
     )
   }
 }


 export default ListingsView;



