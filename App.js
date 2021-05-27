import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>32.7 Module </h1>
      <header className="App-header">
        {/* EKAHNE name="Munna" job="football" egulo holo props. egulo access korte hole props.name, props.job diye access korte hobe */}
        <Person name="Munna" job="football"> </Person>
        <Person name="Mayun" job="Business"> </Person>
      </header>
    </div>
  );
}

function Person(props){
  let personStyle={
    border:"3px solid ",
    margin: "10px",
    color: " #1dfa10 "

  }
  return( 
  <div style={{border:" 2px solid cyan", padding:"15px"}}>
    <h1> {props.name} </h1>
    <p style={personStyle}>{props.job}</p>
  </div>
    
  )
}




export default App;
