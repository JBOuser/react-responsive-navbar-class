import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(isOpen ? false : true);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <h1 style={{
        textAlign:"center", 
        marginTop: "15rem"
        }}>
          Home
      </h1>
    </>
  );
};

export default Home;
