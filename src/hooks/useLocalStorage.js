import { useState } from "react";

function useLocalStorage(key, value){
    const [savedValue, setSavedValue] = useState(()=>{
	const pozycjaLS = window.localStorage.getItem(key);
	
	return pozycjaLS ? JSON.parse(pozycjaLS) : value;
    });

    const zapiszWartosc = (wartosc ) => {
	setSavedValue(wartosc);
	localStorage.setItem(key, JSON.stringify(wartosc));
    }

    return [savedValue, zapiszWartosc];
}

export default useLocalStorage;
