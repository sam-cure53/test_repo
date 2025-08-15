// This file contains a test case that is designed to fail for testing TeamCity's build and test failure detection.

const { alwaysFails } = require('../src/index');

test('alwaysFails should throw an error', () => {
    expect(alwaysFails).toThrow();
});
