export function favoriteReducer(state, action){
    switch(action.type){
	case 'ADD_TO_FAVORITE':
	    console.log(state);
	    return [...state, action.paylod];
	case 'REMOVE_FROM_FAVORITE':
	    return state.filter(favorite => favorite.id !== action.paylod.id); 
	default:
	    return state;
    }
}
