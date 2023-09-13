const { createStore } = require("redux");
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
	numberOfCakes: 10,
	numberOfMobiles: 20
};
//Reducer
const reducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - 1
			};
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
const store = createStore(reducer);
console.log("Initial State", store.getState());
store.subscribe(() => console.log("Update state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
