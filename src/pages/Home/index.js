import React, {Component} from 'react';
import FirstSection from '../../components/FirstSection';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import { varsInfoSectionConsciousness, varsInfoSectionAccount, varsInfoSectionPower } from '../../components/InfoSection/Data';
import Navbar from '../../components/Navbar';
import { MAIN } from '../../components/Navbar/NavbarConstants';
import ServicesSection from '../../components/Services';
import Sidebar from '../../components/Sidebar';
import TopLine from '../../components/TopLine';

class Home extends Component{

  constructor(){
    super();
    this.state = {
      is_open: false,
      //screen_width:0.0,
      is_large_height:false,
      update_height:true    
    }

    //bind an arrow function to the constructor
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    if(this.state.update_height){
      this.setState({
        is_large_height: 800 < window.innerHeight,
        update_height: false
      })
    }
  }

  toggle = () => {
    this.state.is_open ? 
      this.setState({is_open: false}) : 
      this.setState({is_open: true});
  }

  render(){

    const {is_open, is_large_height} = this.state;

    return (
      <>
        <TopLine id={MAIN}/>
        <Sidebar is_open={is_open} toggle={this.toggle}/>
        <Navbar toggle={this.toggle}/>
        <FirstSection is_large_height={is_large_height}/>
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
