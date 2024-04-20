import '../App.css';
import React, { useState } from 'react';


const Dodaj = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

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
      <div>
        <form onSubmit={handleSubmit}>
        <br/>

        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        /><br/>


        <label for="phnum">Phone number:</label><br/>
        <input 
        type="text" id="phnum" name="phnum"
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
    );
  };
  
  export default Dodaj;