import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="inputDiv">
          <div className="insideInp">
            <div>Menu</div>
            <input
              type="text"
              className="inputBox"
              placeholder="Search you question here or ask tila"
            />
          </div>

          <div className="inputDivRight">
            <div>icon</div>
            <div>profile</div>
            <div>Username</div>
          </div>
        </div>
        {/* {first div completed} */}
        <div className="secondDiv">
          <div className="secondleftDiv">
            <h4>Current licence</h4>
            <div className="usdaud">
              <h4>USD/CAD</h4>
              <h4>AUD/USD</h4>
            </div>
          </div>
          <div>
            <h3>Welcome, Username</h3>
            <h5 className="goodtosee">Good to see you again!</h5>
          </div>
        </div>
        {/* {second div completed} */}

        <div className="thirdDiv">
          <div className="thirdDivLeft">
            <div>News & Data Flow</div>
            <div className="timeDiv">
              <div className="times">
                <h6>5M</h6>
                <h6>15M</h6>
                <h6>30M</h6>
                <h6>1H</h6>
                <h6>2H</h6>
                <h6>4H</h6>
                <h6>All</h6>
              </div>
              <div className="filter">Filter</div>
            </div>
          </div>
          <div className="circleDiv">circle</div>
        </div>
      </div>
    </>
  );
}

export default App;
