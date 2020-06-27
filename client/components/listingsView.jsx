
import React, { Fragment } from 'react';
import App from './App.jsx';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faBed, faBath, faRulerCombined, faHeart } from '@fortawesome/free-solid-svg-icons';


// Styled Components

const Wrapper = styled.div`


`;

const Main = styled.div`
// transition: 'width '
width: 100%;
marginRight: 150px;
marginLeft: 80px;
display: flex;
alignItems: center;
// justifyContent: space-between;
// width: 100%;
// height: 100px;
objectFit: cover;
// &:hover ${ListingContainer} {
//   width: '25%';
// }
// width: 25%
// overflow: 'hidden'
`;


const ListingContainer = styled.div`
// border: 3px solid black;
// marginTop: 100px;
// marginBottom: 100px;
padding-left: 50x;
padding-right: 50px;
// display: flex;
alignItems: center;
justifyContent: center;
// width:100%;
// height: 100px;
// objectFit: cover;
transition: transform 0.5s ease-in-out;
transform: translateX(${props => props.counter + 'px'});
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  border-radius: 10px;
  overflow: hidden;
  -webkit-transition:  .5s ease;
  &:hover{
    transform-origin: 0 0;
    transition: transform .5s ease;
    transform: scale(1.08);
  }
`;

const Price = styled.div`
font-weight: bold;
font-size: 25px;
margin-top: 10px;
vertical-align: top;
// margin-top: 100px;
// margin-bottom: 100px;
margin-right: 25px;
margin-left: 25px;
display: flex;
alignItems: center;
`;

const Text = styled.div`
  vertical-align: top;
  color: blue;
`;

const SpecsStyle = styled.div`
  margin-top: 10px;
  vertical-align: top;
  // margin-top: 100px;
  // margin-bottom: 100px;
  margin-right: 25px;
  margin-left: 25px;
  display: flex;
  alignItems: center;
  justify-content: space-between;
  // width:100%;
  // height: 100px;
  object-fit: cover;
  // width: 25%;
  // overflow: hidden
`;

const PrevBtn = styled.div`
  background- color: white;
  display: ${props => props.counter === 0? 'none' : ''};
  position: absolute;
  top: 25%;
  z-index: 10;
  left: 0%;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const NextBtn = styled.div`
  color: grey;
  display: ${props => props.counter === -3072? 'none' : ''};
  position: absolute;
  top: 25%;
  z-index: 10;
  right: 0%;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const Heart = styled.div`
  stroke: white;
  stroke-width: 50;
  opacity: .7;
  color: #565656;
  position: absolute;
  top: 4%;
  z-index: 10;
  right: 18%;
  font-size: 30px;
  cursor: pointer;
`;

class ListingsView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
    this.increaseCounter = this.increaseCounter.bind(this);
    this.descreaseCounter = this.decreaseCounter.bind(this);
  }


  increaseCounter() {
    if (this.state.counter >= 0) {
      return;
    }
    this.setState({
      counter: this.state.counter + 1024
    })
    console.log(this.state.counter);
  }

  decreaseCounter() {
    if (this.state.counter <= -3072) {
      return;
    }
    this.setState({
      counter: this.state.counter - 1024
    })
    console.log(this.state.counter);
  }

   render() {
     return (
        <div>
        <Wrapper>
          <PrevBtn counter={this.state.counter}>
            <FontAwesomeIcon onClick={() => {this.increaseCounter()}} icon={faChevronCircleLeft}></FontAwesomeIcon>
          </PrevBtn>
          <Main className="mainContainer">{this.props.listings.map((listing) =>
            <Fragment>
              <ListingContainer counter={this.state.counter}>
                <ImageContainer>
                  <Image src={listing.imageUrl}></Image>
                </ImageContainer>
                  <Price>{listing.price}</Price>
                <SpecsStyle>
                  <FontAwesomeIcon icon={faBed}/>
                <Text>
                  <h3>{listing.bedrooms}</h3>
                </Text>
                  <FontAwesomeIcon icon={faBath}/>
                  <h3>{listing.bathrooms}</h3>
                  <FontAwesomeIcon icon={faRulerCombined}/>
                  <h3>{listing.sqft}</h3>
                  <Heart>
                    <FontAwesomeIcon icon={faHeart}/>
                  </Heart>
                </SpecsStyle>
                <div>
                  <SpecsStyle>{listing.address}</SpecsStyle>
                </div>
              </ListingContainer>
            </Fragment>
              )}
          </Main>
          <NextBtn counter={this.state.counter}>
            <FontAwesomeIcon onClick={() => {this.descreaseCounter()}} icon={faChevronCircleRight}></FontAwesomeIcon>
          </NextBtn>
        </Wrapper>
        </div>
     )
   }
 }

 export default ListingsView;



