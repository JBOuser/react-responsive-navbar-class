import React, {Component} from 'react';
import { RightArrowButton } from '../Buttons/MainButtons';
import { 
    ID, 
    DISCOVER_YOUR_REALITY_BEYOND_THE_LIMITS, 
    GET_STARTED, 
    VIRTUAL_MAGIC_WORLD 
} from './FirstSectionConstants';
import { capitalizeLine } from '../../utils';
import Video from '../../videos/first_video.mp4';
import { 
    FirstContainer, 
    FirstBg, 
    VideoBg, 
    FirstContent, 
    FirstHeader, 
    FirstParagraph, 
    FirstBtnWrapper,
    ArrowForward, 
    ArrowRight
} from './FirstSection'; 

class FirstSection extends Component {

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

    render(){

        const {hover} = this.state;

        return (
            <FirstContainer id={ID}>
                <FirstBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </FirstBg>
                <FirstContent>
                    <FirstHeader>
                        {capitalizeLine(VIRTUAL_MAGIC_WORLD)}
                    </FirstHeader>
                    <FirstParagraph>
                        {capitalizeLine(DISCOVER_YOUR_REALITY_BEYOND_THE_LIMITS)}
                    </FirstParagraph>
                    <FirstBtnWrapper>
                        <RightArrowButton to="signup" 
                            onMouseEnter={this.onHover} 
                            onMouseLeave={this.onHover}
                            is_big='true'
                            is_dark='true'
                        >
                            {capitalizeLine(GET_STARTED)} 
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </RightArrowButton>
                    </FirstBtnWrapper>
                </FirstContent>
            </FirstContainer>
        )
    }
}

export default FirstSection;