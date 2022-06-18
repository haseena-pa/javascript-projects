import { useReducer } from 'react';
import './App.css';
import DigiBtn from './DigiBtn';
import OperationBtn from './OperationBtn';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.previousOperand == null) {
        console.log(payload);
        return {
          ...state,
          operation: payload.operation,
          previousOperand: `${state.currentOperand} `,
          currentOperand: null,
        }
      }
    // case CLEAR:
    //   return
    // case DELETE_DIGIT:
    //   return
    // case EVALUATE:
    //   return
    default:
      return state;
  }
}

function App() {

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">
          {currentOperand}
        </div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationBtn operation="/" dispatch={dispatch} />
      <DigiBtn digit="1" dispatch={dispatch} />
      <DigiBtn digit="2" dispatch={dispatch} />
      <DigiBtn digit="3" dispatch={dispatch} />
      <OperationBtn operation="*" dispatch={dispatch} />
      <DigiBtn digit="4" dispatch={dispatch} />
      <DigiBtn digit="5" dispatch={dispatch} />
      <DigiBtn digit="6" dispatch={dispatch} />
      <OperationBtn operation="+" dispatch={dispatch} />
      <DigiBtn digit="7" dispatch={dispatch} />
      <DigiBtn digit="8" dispatch={dispatch} />
      <DigiBtn digit="9" dispatch={dispatch} />
      <OperationBtn operation="-" dispatch={dispatch} />
      <DigiBtn digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>


    </div>
  );
}

export default App;
