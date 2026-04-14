
import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(27);

  const handleUpdateAge = ()=>{
     setAge((prevAge)=>prevAge+1);
     console.log("Current Age is",age);
  }
  return (
    <div className="App">
      <p>Age of Pranay Aswani is {age}</p>
      <button onClick={handleUpdateAge}>Get Older</button>
    </div>
  );
}

export default App;
