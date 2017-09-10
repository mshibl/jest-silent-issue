

console.log('*********** This message should not be displayed when running yarn test (jest --silent --verbose)');

describe('jest --silence bug', () => {
  test('console output should be supressed', () => {
    expect(1+2).toBe(3);
  });
});
