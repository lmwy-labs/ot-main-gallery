import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.closePopupGallery = this.closePopupGallery.bind(this);
  }

  handleClick(e) {
    this.setState({
      selected: e.target.id,
    });
  }

  handleNextClick() {
    const { selected } = this.state;
    const { images } = this.props;
    if (selected == images.length - 1) {
      return;
    }

    this.setState({
      selected: Number(selected) + 1,
    });
  }

  handlePreviousClick() {
    const { selected } = this.state;
    if (selected == 0) {
      return;
    }
    this.setState({
      selected: selected - 1,
    });
  }

  closePopupGallery() {
    this.setState({
      selected: '',
    });
  }

  render() {
    const { images } = this.props;
    const { selected } = this.state;
    if (images.length === 0) {
      return null;
    }

    let bigImage;
    if (selected !== '') {
      bigImage = (
        <div>
          <GreyBackground />
          <FixedDiv>
            <ButtonPreviousImage onClick={this.handlePreviousClick}>{'<'}</ButtonPreviousImage>
            <ImgBig src={images[selected].url} />
            <ButtonFlag>P</ButtonFlag>
            <ButtonNextImage onClick={this.handleNextClick}>{'>'}</ButtonNextImage>
          </FixedDiv>
          <XButtonPopup onClick={this.closePopupGallery}>X</XButtonPopup>
        </div>
      );
    }

    return (
      <div>
        {bigImage === undefined ? <div /> : bigImage}
        <Row>
          <Column>
            <ImgDouble onClick={this.handleClick} id={0} src={images[0].url} />
            <ImgDouble onClick={this.handleClick} id={1} src={images[1].url} />
          </Column>
          <Column>
            <ImgSingle onClick={this.handleClick} id={2} src={images[2].url} />
          </Column>
          <Column>
            <ImgTriple onClick={this.handleClick} id={3} src={images[3].url} />
            <ImgTriple onClick={this.handleClick} id={4} src={images[4].url} />
            <ImgTriple onClick={this.handleClick} id={5} src={images[5].url} />
          </Column>
          <Column>
            <ImgTriple onClick={this.handleClick} id={6} src={images[6].url} />
            <ImgTriple onClick={this.handleClick} id={7} src={images[7].url} />
            <ImgLast onClick={this.handleClick} id={8} src={images[8].url} />
          </Column>
        </Row>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

Gallery.defaultProps = {
  images: [],
};

export default Gallery;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column
`;

const Img = styled.img`
  margin: 1px;
  cursor: pointer;
`;

const ImgDouble = styled(Img)`
  width: 138.57px;
  @media only screen and (max-width: 767px) {
    width: 19.6vw
  }
`;

ImgDouble.displayName = 'ImgDouble';

const ImgSingle = styled(Img)`
  width: 278.53px;
  @media only screen and (max-width: 767px) {
    width: 39.65vw
  }
`;

ImgSingle.displayName = 'ImgSingle';

const ImgTriple = styled(Img)`
  width: 91.84px;
  @media only screen and (max-width: 767px) {
    width: 13vw
  }
`;

ImgTriple.displayName = 'ImgTriple';

const ImgLast = styled(ImgTriple)`
  filter: brightness(50%);
  &:hover {
    filter: brightness(25%);
  }
  @media only screen and (max-width: 767px) {
    width: 13vw
  }
`;

ImgLast.displayName = 'ImgLast';

const GreyBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color:black;
  opacity: 0.9;
`;

const FixedDiv = styled.div`
  position: fixed;
  top: 55px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 2;
  width: 236px;
  height: 266px;
  @media only screen and (min-width: 641px) {
    width: 336px;
    height: 336px;
  }
  @media only screen and (min-width: 1025px) {
    width: 526px;
    height: 526px;
  }
`;

const ImgBig = styled.img`
  width: 236px;
  @media only screen and (min-width: 641px) {
    width: 336px;
  }
  @media only screen and (min-width: 1025px) {
    width: 526px;
  }
`;

ImgBig.displayName = 'ImgBig';

const ButtonGalleryNav = styled.div`
  z-index: 2;
  top: 300px;
  color: #91949a;
  cursor: pointer;
  font-size:25px;
  :hover {
    filter: brightness(75%);
  }
  position: fixed;
  top: 150px;
  @media only screen and (min-width: 641px) {
    top: 220px;
  }
  @media only screen and (min-width: 1025px) {
    top: 310px;
  }
`;

const ButtonPreviousImage = styled(ButtonGalleryNav)`
  margin-left: -60px;
`;

ButtonPreviousImage.displayName = 'ButtonPreviousImage';

const ButtonNextImage = styled(ButtonGalleryNav)`
  margin-left: 281px;
  @media only screen and (min-width: 641px) {
    margin-left: 381px;
  }
  @media only screen and (min-width: 1025px) {
    margin-left: 571px;
  }
`;

ButtonNextImage.displayName = 'ButtonNextImage';

const ButtonFlag = styled.div`
  z-index: 2;
  color: white;
  font-size: 30px;
  font-family: pantheon;
  cursor: default;
  font-weight: bold;
  margin-left: 250px;
  @media only screen and (min-width: 641px) {
    margin-left: 350px;
  }
  @media only screen and (min-width: 1025px) {
    margin-left: 540px;
  }
`;

const XButtonPopup = styled.div`
  z-index: 2;
  position: fixed;
  top: 35px;
  right: 20px;
  cursor: pointer;
  color: #91949a;
  font-size: 28px;
`;

XButtonPopup.displayName = 'XButtonPopup';