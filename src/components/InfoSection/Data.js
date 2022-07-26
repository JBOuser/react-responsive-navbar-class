import { 
    BUTTON_TEXT_ONE, BUTTON_TEXT_TWO, BUTTON_TEXT_THREE,
    DESCRIPTION_TEXT_ONE, DESCRIPTION_TEXT_TWO, DESCRIPTION_TEXT_THREE,
    HEADER_TEXT_ONE, HEADER_TEXT_TWO, HEADER_TEXT_THREE,
    ID_ONE, ID_TWO, ID_THREE,
    TOP_TEXT_ONE, TOP_TEXT_TWO, TOP_TEXT_THREE
} from './InfoSectionConstants';
import capitalizeName, { capitalizeLine, trimLine } from '../../utils';

export const varsInfoSectionConsciousness = {
    id: capitalizeName(ID_ONE),
    is_light_bg: false,
    is_light_txt: false,
    is_dark_btn: false,
    is_dark_txt: false,
    img_first: false,

    top_txt: capitalizeName(TOP_TEXT_ONE),
    header_txt: capitalizeName(HEADER_TEXT_ONE),
    description_txt: capitalizeName(DESCRIPTION_TEXT_ONE),
    btn_txt: capitalizeLine(BUTTON_TEXT_ONE),
    img: require('../../images/s1.svg'),
    alt:'spirit'
}

export const varsInfoSectionAccount = {
    id: trimLine(ID_TWO),
    is_light_bg: true,
    is_light_txt: true,
    is_dark_btn: true,
    is_dark_txt: true,
    img_first: true,

    top_txt: capitalizeName(TOP_TEXT_TWO),
    header_txt: capitalizeName(HEADER_TEXT_TWO),
    description_txt: capitalizeName(DESCRIPTION_TEXT_TWO),
    btn_txt: capitalizeLine(BUTTON_TEXT_TWO),
    img: require('../../images/s2.svg'),
    alt:'spirit'
}

export const varsInfoSectionPower = {
    id: capitalizeName(ID_THREE),
    is_light_bg: true,
    is_light_txt: true,
    is_dark_btn: true,
    is_dark_txt: false,
    img_first: false,

    top_txt: capitalizeName(TOP_TEXT_THREE),
    header_txt: capitalizeName(HEADER_TEXT_THREE),
    description_txt: capitalizeName(DESCRIPTION_TEXT_THREE),
    btn_txt: capitalizeLine(BUTTON_TEXT_THREE),
    img: require('../../images/s3.svg'),
    alt:'spirit'
}