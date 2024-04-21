import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';




// function TextInput(props) {

//   const [value, setValue] = useState(0);

//   return (
//     <>
//       <label htmlFor={props.id}>{props.label}</label><br/>
//       <input type="text" id={props.id} name={props.id} onChange={(e) => setValue(e.target.value)}/>
//     </>
//   );
// }




const Dodaj = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [sending_interval, setSendInterval] = useState('');
  const [reason, setReason] = useState('');
  const [style, setStyle] = useState('');


  const [slider1, setData1] = useState(0);
  // const [slider2, setData2] = useState(0);


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


    // """
    // Request format (JSON):
    // "user": "Matevž Vidovič",
    // "debtor_name": "Sebastjan Kordiš",
    // "sending_interval": "15min",
    // "platform": "Viber",
    // "contact": "+1234567890",
    // "promt_params": {
    //     "money": "50",
    //     "reason": "Car gas",
    //     "aggression": "4",
    //     "style": "friendly"
    // }
    // """

    const url = 'http://127.0.0.1:5000/new_debtor';
    const data = {
        "user": "Matevž Vidovič",
        "debtor_name": name,
        "contact": phoneNumber,
        "sending_interval": sending_interval,
        "platform": "SMS",
        "promt_params": {
            money: amount,
            reason: reason,
            aggression: slider1,
            style: style
        }

    };

    const fetchPromise =  fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    ;(await fetchPromise).json().then((response) => {

      console.log("response:");
      console.log(response);
      
      const text = response.message
      const msg = "First message sent: \n" + text;
      alert(msg)

      
    })

    // fetchPromise.then((response) => {

    //   const respJson = response.json()

    //   // console.log("response:");
    //   // console.log(response);

    //   console.log("response.json()");
    //   console.log(respJson);




    //   const text = respJson["<value>"].message
    //   const msg = "First message sent: \n" + text;
    //   alert(msg)

      
    // })
    // .then(data => console.log(data))
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

    sendSMS(name, phoneNumber, amount, slider1);

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
    setSendInterval('');
    setReason('');
    setStyle('');
  };

    return (

    <div style={styleParent}>
      <div style={styleLeft}>
        <form onSubmit={handleSubmit}>
        <br/>

        <label for="name">Debtor's name:</label><br/>
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

      <div style={styleRight}>

        <br/>
        <p>Agressiveness</p>
        <input 
          type="range" 
          className='slider' 
          width="100%" 
          min="1" 
          max="7" 
          value={slider1} 
          onChange={(e) => setData1(e.target.value)} 
          // onClick={() => shoot(data)}
        />
        <p>{slider1}</p>
      
        <br/>

        {/* "sending_interval": "15min",
        "platform": "Viber",
        "promt_params": {
            money: amount,
            reason: "Car gas",
            aggression: slider1,
            style: "friendly" */}
        <form>
        <label for="sending_interval">Sending interval:</label><br/>
        <input type="text" id="sending_interval" name="sending_interval"
        value={sending_interval}
        onChange={(e) => setSendInterval(e.target.value)}
        /><br/>

        <label for="reason">Reason:</label><br/>
        <input type="text" id="reason" name="reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        /><br/>

        <br/>

        <label for="style">In the style of:</label><br/>
        <input type="text" id="style" name="style"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        /><br/>
        </form>


        {/* <Slider id={ "sld 2" }/> */}
        
        {/* <p>{slider2}</p>
        <p>{props.id}</p>
        <input 
          type="range" 
          className='slider' 
          width="100%" 
          min="0" 
          max="10" 
          value={slider2} 
          onChange={(e) => setData2(e.target.value)} 
          // onClick={() => shoot(data)}
        /> */}
      
      </div>
    </div>


    );
  };
  
  export default Dodaj;