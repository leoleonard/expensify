import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';


test('should generare set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generare set end date object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate sort by text with a definied value', () => {
    const text = 'Some text here';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('should generate sort by text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should generate sort by date', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
});

test('should generate sort by amount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});