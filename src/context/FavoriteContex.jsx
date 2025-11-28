import { createContext, useContext, useReducer, useState } from "react";
import { favoriteReducer } from "../reducers/favoriteReducer";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteContext = createContext();

export function FavoriteProvider({children}){
    const [storedFavorites, setStoredFavorites] = useLocalStorage("favorites", []);
    const [favorites, dispatch] = useReducer(favoriteReducer, []);

    const isFavorite = (game) => {
	return favorites.some((favorites) => favorites.id === game.id);
    }

    const toggleFavorite = (game) =>{
	if(isFavorite(game)){
	    dispatch({type: 'REMOVE_FROM_FAVORITE', paylod: game});
	}
	else{
	    dispatch({type: 'ADD_TO_FAVORITE', paylod: game});
	}
	
	console.log(favorites);
    }

    return(
	<FavoriteContext.Provider value={{favorites, isFavorite, toggleFavorite}}>
	    {children}
	</FavoriteContext.Provider>
    );

}

export function favoritesHook(){
    const context = useContext(FavoriteContext);
    return context;
}
