import { useReducer } from 'react';
import { countReducer } from '../reducers/countReducer';

export default function Contact(){

    const [ counter, dispatch ] = useReducer(countReducer, 0);

    return(
	<>
	    <div>
		<h1>Contact Page</h1>
		<p>Contact: xxx-xxx-xxx</p>

		<h3>Licznik : {counter}</h3>
		<button onClick={() => dispatch({type: 'INCREMENT'}) }>+</button>
		<button onClick={() => dispatch({type: 'DECREMENT'}) }>-</button>

		<button onClick={() => dispatch({type: 'RESET'}) }>Reset</button>
	    </div>
	</>
    );

}

