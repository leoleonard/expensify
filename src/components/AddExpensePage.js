import React from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () => (
    <div>
    <h1>Add expense</h1>
        <ExpenseForm
        onSubmit={(expense) => {
            console.log(expense);
        }}
        />
    </div>
);

export default AddExpensePage;