import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibleExpsenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 1200}));
store.dispatch(addExpense({description: 'Gas bill', amount: 10, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 2500}));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpsenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
   <Provider store={store}>
    <AppRouter />
   </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

