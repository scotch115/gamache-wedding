import './App.css';
import frontpage from './images/frontpage.jpeg';
import cute from './images/cute_line.jpeg';

function App() {
  return (
    // <div class="App" style={{backgroundColor: "#CCA497", position: "relative", height: "100vh", width: "100vw"}}>  {/* Colors from bousch's screenshots */}
    //   <div style={{backgroundColor: "#153630", top: "30vh", left: "18vw", width: "50vw",padding: "10vh", position: "relative"}}>  {/* Colors from bousch's screenshots */}
    //     <div style={{backgroundColor: "#81471b", width: "40vw", padding: "10vh", position: "relative", color: "white"}}>  {/* Colors from bousch's screenshots */}
    <div>
      <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
        <img src={cute} alt="cute" style={{width: "50vw"}}/>
        <div style={{fontSize: '10vmin', fontFamily: "Rockabye", color: "#CCA497"}}> <a href="/" style={{textDecoration: 'none', color: '#CCA497'}}>JORDAN & TORRI</a></div>
        {/* <div style={{fontSize: '10vmin', fontFamily: "Brotherline", color: "#CCA497"}}>Jordan & Torri</div> */}
        <ul className="nav"  style={{ fontFamily: "Ranille", fontSize: '3vmin'}}>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/venue">Venue </a></li>
          <li><a href="/travel">Travel</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/">Registry</a></li>
          <li><a href="/photos">Photos</a></li>
        </ul>
      </div>
      <div style={{display: 'flex', justifyContent: "center"}}><img src={frontpage} alt="us" style={{width: "60vw", height: "50vw"}}/> </div>
    </div>
  );
}

export default App;
