const add = (a, b) => a + b;

test('should add two numbers', () => {
    const result = add(5,2);

    expect(result).toBe(7);
});

const generateGreeting = (name = 'No one') => `Hello ${name}!`;

test('should use name', () => {
    const result = generateGreeting('Mike');

    expect(result).toBe('Hello Mike!');
})
test('should generate greeting for no one', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello No one!');
})