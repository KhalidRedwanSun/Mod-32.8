import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=[" Anwar", " Jafor ", "Alomgir", " Salman" ]

  const products=[{name: "Photoshop", price:"$90.99" },{name:" illustrator", price:"$60.99"},{name:" PDF Reader", price:"$6.99"}]

  return(


    <div className="App">
      <h1>32.7 Module </h1>
      <header className="App-header">
        {/* EKAHNE name="Munna" job="football" egulo holo props. egulo access korte hole props.name, props.job diye access korte hobe. main kotha holo ekhane name=, job= egulo jeta likhsi props.(jeta likhsi oita diye access korte hobe)  */}

        <Product product={products[0]}> </Product>
        <Product product={products[1]}> </Product>



        <Person name="Munna" job="football"> </Person>
        <Person name="Mayun" job="Business"> </Person>

      </header>
      
  </div> 
  );
}



function Product(props){
  const productStyle={
    color:"black" ,
    border: '1px solid gray',
    borderRadius: "5px",
    backgroundColor:" lightgray ",
    height:"200px",
    width:" 200px",
    float: "left"

  }
  // props.product= {name: "Photoshop", price:"$90.99" }

  const {name,price}= props.product;
  // ekhane const {name(meaning danpasher props.product.name),price(props.product.price)}= props.product;  
  
  return(
    <div style={productStyle}>
      <h2> {name}</h2>
      <h2> {price}</h2>
      <h1></h1>
      <button>Buy now</button>
      
    </div>
  )


  
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
