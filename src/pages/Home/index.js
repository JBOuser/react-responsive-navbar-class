import React, {Component} from 'react';
import FirstSection from '../../components/FirstSection';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import { varsInfoSectionConsciousness, varsInfoSectionAccount, varsInfoSectionPower } from '../../components/InfoSection/Data';
import Navbar from '../../components/Navbar';
import ServicesSection from '../../components/Services';
import Sidebar from '../../components/Sidebar';

class Home extends Component{

  constructor(){
    super();
    this.state = {
      is_open: false
    }

    //bind an arrow function to the constructor
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.state.is_open ? 
      this.setState({is_open: false}) : 
      this.setState({is_open: true});
  }

  render(){

    const {is_open} = this.state;

    return (
      <>
        <Sidebar is_open={is_open} toggle={this.toggle}/>
        <Navbar toggle={this.toggle}/>
        <FirstSection />
        <InfoSection {...varsInfoSectionConsciousness}/>
        <InfoSection {...varsInfoSectionAccount}/>
        <ServicesSection/>
        <InfoSection {...varsInfoSectionPower}/>
        <Footer/>
      </>
    );
  }
}

export default Home;
