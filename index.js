const redux = require("redux");
const { createStore } = redux;
// Action objects
const CREDIT = "CREDIT";
const DEBIT = "DEBIT";
// Action creations
// Actions to debit money
function withdraw(amount) {
	return {
		type: "DEBIT",
		amount,
		message: "withdrew"
	};
}
function mobileRecharge(amount) {
	return {
		type: "DEBIT",
		amount,
		message: "Mobile Recharge"
	};
}
function payElectricityBill(amount) {
	return {
		type: "DEBIT",
		amount,
		message: "Electricity bills"
	};
}
function sendMoneyOnline(amount) {
	return {
		type: "DEBIT",
		amount,
		message: "someone online"
	};
}
function payTax(amount) {
	return {
		type: "DEBIT",
		amount,
		message: "Tax"
	};
}
// Actions to receive money
function deposit(amount) {
	return {
		type: CREDIT,
		amount,
		message: "deposited"
	};
}
function receiveMoneyOnline(amount) {
	return {
		type: CREDIT,
		amount,
		message: "received money from someone"
	};
}
function salaryCredit(amount) {
	return {
		type: CREDIT,
		amount,
		message: "received your salary"
	};
}
// Initial State of the object
const initialBalanceState = {
	balance: 100
};
// Reducer
const reducer = (state = initialBalanceState, action) => {
	switch (action.type) {
		case CREDIT:
			return {
				balance: state.balance + action.amount,
				reason:
					"You " +
					action.message +
					" " +
					action.amount +
					" rupees to your account."
			};
		case DEBIT:
			if (action.message == "withdrew")
				return {
					balance: state.balance - action.amount,
					reason:
						"You " +
						action.message +
						" " +
						action.amount +
						" rupees from your account"
				};
			else
				return {
					balance: state.balance - action.amount,
					reason: "You paid " + action.amount + " rupees for " + action.message
				};
		default:
			return state;
	}
};
// Creating a store
const store = createStore(reducer);
console.log("Initial State: ", store.getState());
store.subscribe(() => console.log("Update State: ", store.getState()));
store.dispatch(deposit(1000));
store.dispatch(deposit(200));
store.dispatch(withdraw(100));
store.dispatch(withdraw(50));
store.dispatch(receiveMoneyOnline(500));
store.dispatch(mobileRecharge(599));
store.dispatch(salaryCredit(75000));
store.dispatch(sendMoneyOnline(50000));
store.dispatch(payElectricityBill(478.5));
store.dispatch(payTax(5000));
