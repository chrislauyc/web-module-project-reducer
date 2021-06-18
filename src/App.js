import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, {initialState} from './reducers/index';
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryRecall,
  memoryClear,
  addDigit
} from './actions/index';

function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const handleOperator=(e)=>{
    dispatch(changeOperation(e.target.value));
  };
  const handleDigit=(e)=>{
    dispatch(addDigit(e.target.value));
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>{dispatch(memoryAdd())}}/>
              <CalcButton value={"MR"} onClick={()=>{dispatch(memoryRecall())}}/>
              <CalcButton value={"MC"} onClick={()=>{dispatch(memoryClear())}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleDigit}/>
              <CalcButton value={2} onClick={handleDigit}/>
              <CalcButton value={3} onClick={handleDigit}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleDigit}/>
              <CalcButton value={5} onClick={handleDigit}/>
              <CalcButton value={6} onClick={handleDigit}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleDigit}/>
              <CalcButton value={8} onClick={handleDigit}/>
              <CalcButton value={9} onClick={handleDigit}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperator}/>
              <CalcButton value={"*"} onClick={handleOperator}/>
              <CalcButton value={"-"} onClick={handleOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>{
                dispatch(clearDisplay());
              }}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
