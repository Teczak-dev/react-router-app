import { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import { useTheme } from '../context/ThemeContext';

export default function Games(){
    const {theme, toggleTheme} = useTheme();
    const [gamesDB, setGamesDB] = useState([]);
    
    useEffect(()=> {
	fetchGames();
    }, [])

    const fetchGames = async () => {
            const response = await fetch('/api/games');
            const data = await response.json();
	    console.log(data);
	    setGamesDB(data);
        };

   return (
	<div style={{
	    backgroundColor: theme === 'dark' ? '#222' : '#eee',
	    color: theme === 'dark' ? '#eee' : '#222',
	    minHeight: '100vh',
	    padding: '20px'
	}}>
	    <h1>Lista gier Free2Play</h1>
	    <ul style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row' , gap: '20px', listStyleType: 'none'}}>
		{gamesDB.map(game => (
		    <GameCard game={game} />    		
		))}
	    </ul>
	</div>
   );
}
