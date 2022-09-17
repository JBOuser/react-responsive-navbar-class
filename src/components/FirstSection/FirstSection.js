//import { FaBars } from 'react-icons/fa';
//import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
//import { Link as LinkRouter } from 'react-router-dom';
//import { Link as LinkScroll } from 'react-scroll';
import {MdKeyboardArrowRight as MdArrowRight, MdArrowForward} from 'react-icons/md';

export const FirstContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: ${({is_large_height}) => (is_large_height ? '750px' : '650px')};
    //height: 900px;
    position: relative;
    z-index: 1;

    /* Add :before styles */
    :before {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const FirstBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34
`;

export const FirstContent = styled.div`
   z-index: 3;
   max-width: 1200px;
   position: absolute;
   padding: 8px 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const FirstHeader = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const FirstParagraph = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const FirstBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;