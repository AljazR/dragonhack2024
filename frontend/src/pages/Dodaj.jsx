import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';


const Dodaj = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const sendSMS = async (name, phoneNumber) => {
    /*try {
      const url = 'https://localhost:5000/send_sms';
      const body = JSON.stringify({
        "name": name,
        "phone_number": phoneNumber
      });
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      // Handle data
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error
    }*/

    const url = 'http://127.0.0.1:5000/send_sms';
    const data = {
        phone_number: phoneNumber,
        message: name
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
        
      };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Logging form data
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Amount:", amount);

    sendSMS(name, phoneNumber);

    // axios.post('https://localhost:5000/send_sms', {
    //   // Add parameters here
    //   "name": name,
    //   "phone_number": phoneNumber,
    //   // amount: amount
    // })
    // .then((response) => {
    //   console.log(response.data);
    //     // Handle data
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

    
    
    // Usage
    // const name = 'John Doe';
    // const phoneNumber = '1234567890';
    // sendSMS(name, phoneNumber);
    // fetch("https://localhost:5000/send_sms", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle successful response
    //   console.log('Response from server:', data);
    // })
    // .catch(error => {
    //   // Handle error
    //   console.error('Error:', error);
    // });
  // };
    
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