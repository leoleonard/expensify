import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'asdfg',
        description: 'January rent',
        note: 'This was the final payment babe',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

