import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

export default function LoginForm(){

    const [login, setLogin] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    
    const loginInputRef = useRef(null);
    const { user, setUser } = useUser();
    useEffect(() => {
	loginInputRef.current.focus();
    },[]);

    function handleLogin(e){
	e.preventDefault();
	if (login === "Mikołaj"){
	    setUser(login);
	    navigate('/admin'); }
	else setErrorMessage("Błedny login");
    }   
    

    return (
	<div>
	    <h1>Logowania</h1>
	    <p>Proszę wprowadzić dane logowania</p>

	    <p>{errorMessage}</p>
	    <form onSubmit={handleLogin}>
		
		<input  
		    ref={loginInputRef}
		    type="text" 
		    onChange={e => setLogin(e.target.value)} 
		    value={login}/>
		
		<button type="submit">Zaloguj się</button>
	    </form>
	</div>
    );
}	
