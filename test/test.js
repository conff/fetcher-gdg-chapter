import fetcher from '../src/';

describe('should work', () => {
  test('should log', () => {
    const logger = {
      info: jest.fn(),
    };

    fetcher(logger);
    expect(logger.info).toHaveBeenCalled();
  });
});
