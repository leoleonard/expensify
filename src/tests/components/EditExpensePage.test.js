import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';


let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[2]}
        />);
});

test('should render add expense page correctyl', () => {
    expect(wrapper).toMatchSnapshot();
})

// test('should handle onSubmit', () => {
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
// });