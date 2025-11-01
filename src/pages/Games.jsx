import { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

export default function Games(){

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
	<div >
	    <h1>Lista gier Free2Play</h1>
	    <ul style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row' , gap: '20px', listStyleType: 'none'}}>
		{gamesDB.map(game => (
		    <GameCard game={game} />    		
		))}
	    </ul>
	</div>
   );
}
