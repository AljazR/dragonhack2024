import '../App.css';
import React, { useState } from 'react';

function Slider(props) {
  const shoot = (value) => {
    // alert(val);
    console.log(value)
  }

  const [data, setData] = useState(0);

  return (
    <>
      <p>{data}</p>
      <p>{props.id}</p>
      <input 
        type="range" 
        className='slider' 
        width="100%" 
        min="0" 
        max="10" 
        value={data} 
        onChange={(e) => setData(e.target.value)} 
        onClick={() => shoot(data)}
      />
    </>
  );
}

const Dodaj = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  // Styles for alignment
  const styleParent = {
    margin: "0 0 20% 20%",
    padding: "5% 0 0 0"
  };
  const styleLeft = {
    float: "left"
  };
  const styleRight = {
    float: "left",
    margin: "0 0 0 5%",
    padding: "0 0 0 5%",
    height: "600px",
    borderLeft: "2px solid #e0e0e3"
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Logging form data
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Amount:", amount);
    
    // Clearing form fields
    setName('');
    setPhoneNumber('');
    setAmount('');
  };

  return (
    <div style={styleParent}>
      <div style={styleLeft}>
        <form onSubmit={handleSubmit}>

        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>


        <label for="phnum">Phone number:</label><br/>
        <input type="text" id="phnum" name="phnum"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        /><br/><br/>


        <label for="amount">Owed amount (add units):</label><br/>
        <input type="text" id="amount" name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br/><br/>

        <input type="submit" value="Add"></input>
        </form>
      </div>
      
      <div style={styleRight}>
        <br/>
        <Slider id={ "sld 1" }/>
        <br/><br/><br/>
        <Slider id={ "sld 2" }/>
      </div>
    </div>
  );
};

export default Dodaj;