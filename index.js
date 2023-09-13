const redux = require("redux");
const { createStore } = require("redux");
const combineReducer = redux.combineReducers;
// Single Action
// npm install redux
const BUY_CAKE = "BUY_CAKE";
const BUY_MOBILE = "BUY_MOBILE";
//Action creatin
function buyCake() {
	return {
		type: "BUY_CAKE",
		message: "Cake Action......."
	};
}
function buyMobile() {
	return {
		type: "BUY_MOBILE",
		message: "Cake Action......."
	};
}
// initialState of the Object
const initialCakeState = {
	numberOfCakes: 10
};
initialMobileState = {
	numberOfMobiles: 20
};
//Reducer1
const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - 1
			};
		default:
			return state;
	}
};
//Reducer2
const mobileReducer = (state = initialMobileState, action) => {
	switch (action.type) {
		case BUY_MOBILE:
			return {
				...state,
				numberOfMobiles: state.numberOfMobiles - 1
			};
		default:
			return state;
	}
};
//Store
const rootReducer = combineReducer({
	cake: cakeReducer,
	mobile: mobileReducer
});
const store = createStore(rootReducer);
console.log("Initial State", store.getState());
store.subscribe(() => console.log("Update state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
