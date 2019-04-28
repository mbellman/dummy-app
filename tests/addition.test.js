test('adds', () => {
	expect(1 + 1).toBe(2);
	expect(5 + 5).toMatchSnapshot();
});