import logo from './logo.svg';
import './App.css';
import Card from './card';
import ProfilePic from './newgojo.jpg'
import ProfilePic2 from './naruto-profile.jpg'
import ProfilePic3 from './madar-profile.jpg' 
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import UserGreeting from '../../UserGreeting.jsx'
import List from '../../List.jsx';
import ListNew from './ListNew.jsx';

function App() {
  /*return (
    <>
    <Card
      image={ProfilePic}
      title="Gojo Satoru"
      description="Strongest sorcerer"
      attack1="Domain Expansion"
      attack2="Purple ball"
      attack3="Red ball"
    />
    <Card
      image={ProfilePic2}
      title="Naruto Uzumaki"
      description="7th Hokage"
      attack1="Rasengan"
      attack2="Rasenshuriken"
      attack3="Shadow clone"    
    />
    <Card
      image={ProfilePic3}
      title="Madara Uchiha"
      description="The ghost of the uchiha"
      attack1="Rinnegan"
      attack2="Full Susano"
      attack3="Shinra Tensei"
    />
    </>
    
  );*/
  
    /*return(
      <Button/>
    );*/
    /*return(
      <>
      <Student name="Pranav Mehrotra" age={30} isStudent={true}/>
      <Student name="Hardik Sirohi" age={69} isStudent={false}/>
      <Student name="Ishan" age={45} isStudent={true}/>
      <Student name="Soubhik Dey" age={20} isStudent={false}/>
      <Student/>



      </>
    );*/
    /*return(
      <>
        <UserGreeting isLoggedIn={true} userName="Kamikaazeyy"/>
      </>
    );*/
     
    return(
      <>
      <List/>
      </>
    );
    }

export default App;
