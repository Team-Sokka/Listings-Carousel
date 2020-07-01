
import React, { Fragment } from 'react';
import App from './App.jsx';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faBed, faBath, faRulerCombined, faHeart } from '@fortawesome/free-solid-svg-icons';

// Styled Components

const Wrapper = styled.div`
  // overflow: auto;
  // border: black solid;
  display: flex;
  postition: relative;
`;

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;

const ListingContainer = styled.div`
  // position: relative;
  max-width: 305px;
  // margin: auto;
  padding-left: 12px;
  padding-right: 12px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.counter + 'px'});
`;

const ImageContainer = styled.div`
  // position: relative;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
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
  color: #404040;
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-right: 25px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 22px;
  color: #303030;
`;

const SpecsStyle = styled.div`
  // position: relative;
  margin-right: 25px;
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: grey;
`;

const PrevBtn = styled.div`
  // overflow: auto;
  stroke: grey;
  stroke-width: 3;
  display: ${props => props.counter === 0? 'none' : ''};
  position: absolute;
  bottom: 475px;
  left: 32px;
  z-index: 10;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const NextBtn = styled.div`
  // overflow: auto;
  stroke: grey;
  stroke-width: 3;
  display: ${props => props.counter === -2620? 'none' : ''};
  position: absolute;
  bottom: 475px;
  right: 32px;
  z-index: 10;
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
  top: 3%;
  right: 8%;
  z-index: 10;
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
      counter: this.state.counter + 1310,
    })
  }

  decreaseCounter() {
    if (this.state.counter <= -2072) {
      return;
    }
    this.setState({
      counter: this.state.counter - 1310,
    })
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
                    <StyledIcon icon={faBed}/>
                    <Text>{listing.bedrooms}</Text>
                    <StyledIcon icon={faBath}/>
                    <Text>{listing.bathrooms}</Text>
                    <StyledIcon icon={faRulerCombined}/>
                    <Text>{listing.sqft}</Text>
                    <Heart>
                      <FontAwesomeIcon icon={faHeart}/>
                    </Heart>
                  </SpecsStyle>
                  <SpecsStyle><Text>{listing.address}</Text></SpecsStyle>
                  <SpecsStyle><Text>{'Waialae-Kahala, Honolulu, HI'}</Text></SpecsStyle>
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



