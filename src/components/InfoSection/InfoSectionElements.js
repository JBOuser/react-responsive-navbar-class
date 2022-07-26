/* Green HEX: #01BF71 */

import styled from 'styled-components';
import {MdKeyboardArrowRight as MdArrowRight, MdArrowForward} from 'react-icons/md';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({is_light_bg}) => (is_light_bg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({img_first}) => (img_first ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${(img_first) => (img_first ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const InfoColumnOne = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const InfoColumnTwo = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const InfoTextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const InfoTopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const InfoHeader = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({is_light_txt}) => (is_light_txt ? '#e0e0eb' : '010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const InfoDescription = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({is_light_txt}) => (is_light_txt ? '#010606' : '#e0e0eb')};
`;

export const InfoBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const InfoImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const InfoImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0; 
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;