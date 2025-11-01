import { Link, useParams } from "react-router-dom";
import { useState } from 'react';

export default function GameDetails(){
    const {gameId} = useParams();
    const [game, setGame] = useState(async () => {
            const response = await fetch('/api/game?id='+gameId);
            const data = await response.json();
	    console.log(data);
	    setGame(data);
        });
    return(
	<div style={{position: 'relative', padding: '20px'}}>
	    <Link to='/games' style={{position: 'absolute', left: '20px', top: '0'}}>Powrót do listy gier</Link>
	    <h2 style={{width: '100%', textAlign: 'left', fontSize: '35px'}}>{game.title}</h2>
	    {/* Images*/}
	    <div style={{width: '100%', height: 'auto', display: 'flex',flexDirection:'row',flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
		<img src={game.thumbnail} style={{width: '45%'}}/>
		{game.screenshots && game.screenshots.map(screenshot => (
		    <img src={screenshot.image} style={{width: '45%'}}/>
		))}
	    </div>
	    {/* two sections */}
	    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px'}}>
		<div style={{width: '65%',minHeight: '500px'}}>
		    <h3 style={{textWrap: 'wrap'}}>{game.description}</h3>
		    <span><strong>Minimalne wymagania sprzętowe:</strong></span>
		    {game.minimum_system_requirements ? (
			<ul>
			    <li><strong>OS:</strong> {game.minimum_system_requirements.os}</li>
			    <li><strong>Processor:</strong> {game.minimum_system_requirements.processor}</li>
			    <li><strong>Memory:</strong> {game.minimum_system_requirements.memory}</li>
			    <li><strong>Graphics:</strong> {game.minimum_system_requirements.graphics}</li>
			    <li><strong>Storage:</strong> {game.minimum_system_requirements.storage}</li>
			</ul>
		    ) : (
			<p>Brak danych o minimalnych wymaganiach sprzętowych.</p>
		    )}
		</div>
		<div style={{width: '25%',height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', borderLeft: '2px solid #ccc', paddingLeft: '20px'}}>
		    {/* game url button */}
		    <div style={{width: '100%', textAlign: 'center'}}>
		    <a href={game.game_url} target="_blank" rel="noopener noreferrer" style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px'}}>Zagraj teraz</a>

	    	    </div>
		    <h3>Informacje o grze:</h3>
		    <span><strong>Status:</strong> {game.status}</span>
		    <span><strong>Gatunek:</strong> {game.genre}</span>
		    <span><strong>Platforma:</strong> {game.platform}</span>
		    <span><strong>Developer:</strong> {game.developer}</span>
		    <span><strong>Wydawca:</strong> {game.publisher}</span>
		    <span><strong>Data wydania:</strong> {game.release_date}</span>
		    <span><strong>Platformy:</strong> {game.platform}</span>

		</div>
	    </div>

	</div>
    );
}

