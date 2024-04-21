
import logo from './logo.png';
import "../App.css"

const MyNavbar = () => {
    
    const styleImg = {
        height: 100,
        width: 100
    }
    // const styleLink = {
    //     margin: "10px 0 0 0"
    // }
    
    return (
        <div >
            <head className="App-header">
            
            <ul>
            <li><img src={require('./logo3.png')} style={styleImg}></img></li>
            <li><b>Juicer</b></li>
            <li><a href="/">Home</a></li>
            <li><a href="/dodaj">Add debtor</a></li>
            <li><a href="/dolzniki">Debtor</a></li>
            </ul>

            
            </head>
            <body>
            </body>
        </div>
    );
  };
  
  export default MyNavbar;
  