import React from 'react';
import './App.css';
import Main from './components/main';
import {
  Link
} from 'react-router-dom';
import Img from './Pics/D.JPG';
import FB from './Pics/1.png';
import Insta from './Pics/2.png';
import link from './Pics/3.png';
import Twi from './Pics/4.png';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: "Divyam Grover"
      }
  }
  render() {

      return (

          <
          div className = "container" >
          <
          header className = "header" >
          <
          div >
          <
          nav className = "nav" >
          <
          Link to = "/" > Resume < /Link> <
          Link to = "/blog" > My Achievements < /Link> <
          Link to = "/contact" > Contact < /Link> < /
          nav > <
          div className = "info" >
          <
          h1 > {
              this.state.name
          } < /h1> <
          div >
          <
          p > Student, Lovely Professional University < /p> <
          p > A self - motivated, creative, and aspiring Web Developer < /p> <
          h5 > Web Designing < /h5> <
          h5 > FrontEnd Development < /h5> < /
          div >

          <
          /
          div >
          <
          /div> <
          div className = "image" >
          <
          img src = {
              Img
          }
          alt = "Profile Pic" / > <
          /div> 

          <
          /header> <
          Main / >
          
          <footer className="footer">
          
          <div>
          Email : divyamgrover90@gmail.com
          <br/>
          <br/>
          Phone: 8988261503
          </div>
          <div>
          <a href="https://www.facebook.com/divyam.groverrahul" ><img src={FB} /></a>
          <a href="https://www.instagram.com/rahulhockey_07/"><img src={Insta} /></a>
          <a href="https://www.linkedin.com/in/divyam-grover-3ba9a7144/" ><img src={link} /></a>
          <a href="https://twitter.com/DGrover88917683"><img src={Twi} /></a>
          </div>
          </footer>
          <
          /
          div >

      );
  }


}


export default App;