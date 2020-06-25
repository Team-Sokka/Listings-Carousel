
// import React from 'react';
import React, { Fragment } from 'react'
import App from './App.jsx';
// import Listing from './listing.jsx';
import styled from 'styled-components';


const mainContainer = {
  width: '100%',
  marginRight: '150px',
  marginLeft: '80px',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-between',
  // width:'100%',
  // height: '100px',
  objectFit: 'cover',
  // width: 25%
  // overflow: 'hidden'
};

const listingContainer = {
  // borderRadius: '25%',
  border: '3px solid black',
  // marginTop: '100px',
  // marginBottom: '100px',
  marginRight: '50px',
  marginLeft: '50px',
  // display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // width:'100%',
  // height: '100px',
  objectFit: 'cover',
  // width: 25%
  // overflow: 'hidden'
};

const specsStyle = {
  // marginTop: '100px',
  // marginBottom: '100px',
  marginRight: '25px',
  marginLeft: '25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // width:'100%',
  // height: '100px',
  objectFit: 'cover',
  // width: 25%
  // overflow: 'hidden'
};

const divStyle = {
  display: 'inline-block'
}
const carouselSlide = document.querySelector('.mainContainer');

 class ListingsView extends React.Component {
   constructor(props){
     super(props);
   }

   render() {

     return (
      <div style={mainContainer} className="mainContainer">{this.props.listings.map((listing) =>
        <Fragment>
          <div style={listingContainer}>
            <div>
              <img src={listing.imageUrl}></img>
            </div>
              <h3 style={specsStyle}>{listing.price}</h3>
            <div style={specsStyle}>
              <h3>{listing.bedrooms}</h3>
              <h3>{listing.bathrooms}</h3>
              <h3>{listing.sqft}</h3>
            </div>
            <div>
              <h3 style={specsStyle}>{listing.address}</h3>
            </div>
          </div>
        </Fragment>
          )}
      </div>
     )
   }
 }


 export default ListingsView;



