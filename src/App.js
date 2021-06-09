import {useState} from "react";
import './App.css';
import MultipleOf5 from './multiof5';


function App() {
const [counter,setCounter]= useState([]);

  const addCounter = () => {
    setCounter(counter.concat({id: counter.length, count: 0}));
  }

  function increase(id){
    setCounter(counter.map(el=>{
      if(el.id === id){
        el.count++;
      }
      return el;
    }));
  }
  function decrease(id){
    setCounter(counter.map(el=>{
      if(el.id === id){
        el.count--;
      }
      return el;
    }));
  }

  return (
    <div className="App">
      <button onClick={()=> addCounter()}>Add Counter</button>
        { counter.map(el=>{
          return(
            <div key={el.id}>
              <span>Counter #{el.id}</span>
              <div>
                <button onClick={()=>{increase(el.id)}}>+</button>
                <span>{el.count}</span>
                <button onClick={()=>{decrease(el.id)}}>-</button>
              </div>
            </div>
          )
        })
      }
       <MultipleOf5 />
    </div>
  );
}

export default App;
