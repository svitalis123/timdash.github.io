
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App_contain'>
        <div className='App_div1'>
          <div className='content'>
            <img src='./images/image-jeremy.png' className='img'/>
            <br></br>
            <span className='span1'>Report for</span>
            <br></br>
            <span className='span2'>Jeremy</span>
            <br></br>
            <span className='span2'>Robson</span>
          </div>
          <div className='links'>
              <span>Daily</span>
              <br></br>
              <span style={{'color':'white'}}>Weekly</span>
              <br></br>
              <span>Monthly</span>
          </div>
      </div>
      <div className='App_div2'>
        <div className='child1'>
          <div className='child1_e'>
            <div className='inner'>
              <p>Work</p>
              <p className='spec'>...</p>
            </div>
            <span className='bigger'>32hrs</span>
            <br></br>
            <span className='last'>Last Week-36hrs</span>
          </div>
        </div>
        <div className='child2'>  
          <div className='child1_e'>
            <div className='inner'>
                <p>Exercise</p>
                <p className='spec'>...</p>
              </div>
              <span className='bigger'>4hrs</span>
              <br></br>
              <span className='last'>Last Week-5hrs</span>
          </div>
        </div>
      </div>
      <div className='App_div3'>
        <div className='child1_1'>
          <div className='child1_e'>
             <div className='inner'>
                <p>Play</p>
                <p className='spec'>...</p>
              </div>
              <span className='bigger'>10hrs</span>
              <br></br>
              <span className='last'>Last Week-8hrs</span>
          </div>
        </div>
        <div className='child2_1'>
          <div className='child1_e'>
              <div className='inner'>
                <p>Social</p>
                <p className='spec'>...</p>
              </div>
              <span className='bigger'>5hrs</span>
              <br></br>
              <span className='last'>Last Week-10hrs</span>
          </div>
        </div>
      </div>
      <div className='App_div4'>
        <div className='child1_2'>
          <div className='child1_e'>
             <div className='inner'>
                <p>Study</p>
                <p className='spec'>...</p>
              </div>
              <span className='bigger'>4hrs</span>
              <br></br>
              <span className='last'>Last Week-7hrs</span>
          </div>
        </div>
        <div className='child2_2'>
          <div className='child1_e'>
             <div className='inner'>
                <p>Self Care</p>
                <p className='spec'>...</p>
              </div>
              <span className='bigger'>2hrs</span>
              <br></br>
              <span className='last'>Last Week-2hrs</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
