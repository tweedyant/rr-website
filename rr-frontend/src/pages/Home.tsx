import rrBanner from '../img/rrBanner.jpeg'

function Home() {
    return (
      <div style={{ backgroundColor: 'white', height: '100vh', margin: 0 }}>
        {/* Blank white screen */}
        <img src = {rrBanner} alt="RR logo"/>
      </div>
    );
  }
  
  export default Home;