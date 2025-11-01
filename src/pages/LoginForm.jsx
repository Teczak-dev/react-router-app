import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(){

    const [login, setLogin] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    function handleLogin(e){
	e.preventDefault();
	if (login === "Mikołaj"){ navigate('/admin'); }
	else setErrorMessage("Błedny login");
    }   
    

    return (
	<div>
	    <h1>Logowania</h1>
	    <p>Proszę wprowadzić dane logowania</p>

	    <p>{errorMessage}</p>
	    <form onSubmit={handleLogin}>
		
		<input type="text" onChange={e => setLogin(e.target.value)} value={login}/>
		
		<button type="submit">Zaloguj się</button>
	    </form>
	</div>
    );
}	
