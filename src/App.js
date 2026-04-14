
import { useState } from 'react';
import './App.css';

function App() {

  const [person, setPerson] = useState({age:19,siblings:20});
 

  const handleAge = (age)=>{
      setPerson({...person,age:age+1})
  }

  const handleSiblings = (siblings)=>{
      setPerson({...person,siblings:siblings+1})
  }

  return (
    <div className="App">
      <p>Today I am {person.age} Years Old</p>
      <p>I have {person.siblings} Siblings</p>
      <button onClick={()=>handleAge(person.age)}>Get Older</button>
      <button onClick={()=>handleSiblings(person.siblings)}>More Siblings</button>
    </div>
  );
}

export default App;
