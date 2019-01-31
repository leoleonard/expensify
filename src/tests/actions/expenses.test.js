import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action', () => {
    const action = removeExpense({id: '123'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
})

test('should setup edit expense', () => {
    const action = editExpense('123', {note: 'New note value'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'New note value'
        }
    })
})

// test('should setup addExpense action object', () => {
//     const expenseData = {
//         description : 'Rent',
//         amount: 1000,
//         createdAt: 1000,
//         note: 'Last month rent',
//     };
//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expsense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     });
// });

// test('should setup addExpense action with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         id: expect.any(String),
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     })
// });

