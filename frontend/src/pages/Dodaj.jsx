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
      <br/><br/>
      <b>{props.id}</b>
      <p>{data}</p>
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

function SliderWithImg(props) {
  const shoot = (value) => {
    // alert(val);
    console.log(value)
  }

  const [data, setData] = useState(0);

  const styleImgLeft = {
    height: 100,
    width: 100,
    float: "left"
  }
  const styleImgRight = {
    height: 100,
    width: 100,
    float: "right"
  }

  return (
    <>
      <img src={require('./medo.png')} style={styleImgLeft}></img>
      <img src={require('./walter.png')} style={styleImgRight}></img>
      <br/><br/>
      <b>{props.id}</b>
      <p>{data}</p>
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

function TextInput(props) {

  const [value, setValue] = useState(0);

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label><br/>
      <input type="text" id={props.id} name={props.id} onChange={(e) => setValue(e.target.value)}/>
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
  const styleImgLeft = {
    height: 100,
    width: 100,
    float: "left"
  }
  const styleImgRight = {
    height: 100,
    width: 100,
    float: "right"
  }

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

          {/* <TextInput id={ "name" } label={ "Name:" }/>
          <br/><br/> */}
          
          <input type="submit" value="Add"></input>
        </form>
      </div>
      
      <div style={styleRight}>
        <br/>
        
        {/* TOLE STA SLIKI, zgorej sta še stila za slike */}
        <div>
          <img src={require('./medo.png')} style={styleImgLeft}></img>
          <img src={require('./walter.png')} style={styleImgRight}></img>
          <Slider id={ "Aggression" }/>
        </div>
        
        <br/><br/><br/>
        
        <SliderWithImg id={ "Aggression" }/>
        
        <br/><br/><br/>
        
        {/* <div>
          <Slider id={ "sld 2" }/>
        </div> */}

      </div>
    </div>
  );
};

export default Dodaj;

/*

"user": "Matevž Vidovič",
    "debtor_name": "Sebastjan Kordiš",
    "sending_interval": "15min",
    "platform": "Viber",
    "promt_params": {
        "money": "50",
        "reason": "Car gas",
        "aggression": "4",
        "style": "friendly"
    }

*/