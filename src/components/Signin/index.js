import React, { Component } from 'react'
import { 
    CONTINUE,
    EMAIL, 
    FORGOT_PASSWORD, 
    PASSWORD, 
    SIGN_IN_TO_YOUR_ACCOUNT 
} from '../../constants/GeneralConstants'
import { 
    Container, 
    FormButton, 
    FormContent, 
    FormHeaderOne, 
    FormLabel, 
    FormWrap, 
    Icon,
    Form,
    FormInput,
    Text,
    ArrowBack,
    ArrowLeft
} from './SigninElements'
import capitalizeName,{capitalizeLine} from '../../utils';
import { SmallArrowButton } from '../Buttons/MainButtons';

export class SignIn extends Component {

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

        const { hover } = this.state;

        return (
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action='#'>
                                <Icon to='/'>
                                    <img src={require('../../images/white_rabbit_64.svg')} 
                                        alt='logo' 
                                    />
                                </Icon>
                                <FormHeaderOne>
                                    {capitalizeLine(SIGN_IN_TO_YOUR_ACCOUNT)}
                                </FormHeaderOne>
                                <FormLabel htmlFor='for'>{capitalizeName(EMAIL)}</FormLabel>
                                <FormInput type={EMAIL} required />
                                <FormLabel htmlFor='for'>{capitalizeName(PASSWORD)}</FormLabel>
                                <FormInput type={PASSWORD} required />
                                <FormButton type='submit'>{capitalizeName(CONTINUE)}</FormButton>
                                <Text is_footer='true'>{capitalizeLine(FORGOT_PASSWORD)}</Text>
                                <SmallArrowButton to="/" 
                                    onMouseEnter={this.onHover} 
                                    onMouseLeave={this.onHover}
                                    is_big='false'
                                    is_dark_btn='true'
                                >
                                    {hover ? <ArrowBack /> : <ArrowLeft />}
                                    Back 
                                </SmallArrowButton>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        )
    }
}

export default SignIn