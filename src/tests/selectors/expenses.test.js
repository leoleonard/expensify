import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 10,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 100,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]]);

})

test('should filter by startDate work', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2],expenses[0]]);

})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);

});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const amount = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, amount);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);

});