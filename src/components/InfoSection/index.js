import React, { Component } from 'react';
import { DarkButton } from '../Buttons/MainButtons';
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoColumnOne,
  InfoColumnTwo,
  InfoTextWrapper,
  InfoTopLine,InfoHeader,
  InfoDescription,
  InfoBtnWrap,
  InfoImg,
  ArrowRight, 
  ArrowForward
} from './InfoSectionElements';

export class InfoSection extends Component {

  constructor(){
    super();
    this.state = {
        hover:false
    }
  }

  onHover = () => {
      this.state.hover ? 
          this.setState({hover: false}) :
          this.setState({hover: true});        
  }

  render() {

    const {
      id,
      is_light_bg, is_light_txt, 
      is_dark_txt, 
      top_txt, header_txt, description_txt, btn_txt, 
      img_first, img, alt
    } = this.props;
    const { hover } = this.state;

    return (
      <>
        <InfoContainer is_light_bg={is_light_bg} id={id}>
          <InfoWrapper>
            <InfoRow img_first={img_first}>
              <InfoColumnOne>
                <InfoTextWrapper>
                  <InfoTopLine>{top_txt}</InfoTopLine>
                  <InfoHeader is_light_txt={is_light_txt}>{header_txt}</InfoHeader>
                  <InfoDescription is_dark_txt={is_dark_txt}>{description_txt}</InfoDescription>
                  <InfoBtnWrap>
                    
                    <DarkButton to="home"
                      is_dark_btn="true"
                      onMouseEnter={this.onHover} 
                      onMouseLeave={this.onHover}
                    >
                        {btn_txt}
                        {hover ? <ArrowForward /> : <ArrowRight />} 
                    </DarkButton>

                  </InfoBtnWrap>
                </InfoTextWrapper>
              </InfoColumnOne>
              <InfoColumnTwo>
                <InfoImg src={img} alt={alt}></InfoImg>
              </InfoColumnTwo>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    )
  }
}

export default InfoSection