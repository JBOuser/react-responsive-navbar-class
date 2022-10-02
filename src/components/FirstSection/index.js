import React, {Component} from 'react';
import { RightArrowButton } from '../Buttons/MainButtons';
// import { ToastContainer as Toast, toast } from 'react-toast';
import { ToastContainer as Toast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //styles to Toast
import { 
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

    showToast = (text) => {
        toast.success(
            <div style={{textAlign:"center"}}>{text}</div>,
            {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
                closeOnClick: true,
                icon: false,
                hideProgressBar: true
            }
        );
    }

    render(){

        const {hover} = this.state;
        const {is_large_height} = this.props;

        return (
            <FirstContainer is_large_height={is_large_height}>
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
                        <RightArrowButton to="#" 
                            onMouseEnter={this.onHover} 
                            onMouseLeave={this.onHover}
                            is_big='true'
                            is_dark='true'
                            onClick={() => this.showToast('🔥 WELCOME :D 🔥')}
                        >
                            {capitalizeLine(GET_STARTED)} 
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </RightArrowButton>
                    </FirstBtnWrapper>
                    {/* <Toast 
                        position = "bottom-center" 
                        delay = {2000} 
                    /> */}
                    
                    <Toast />
                    {/* {"updated .Toastify__toast-container--top-center from 'react-toastify/dist/ReactToastify.css'"} */}
                </FirstContent>
            </FirstContainer>
        )
    }
}

export default FirstSection;