import ErrorRepository from '../map_ErrorRepository';

test('test_400', () => {
  const map = new ErrorRepository();
  const result = map.translate(400);

  expect(result).toBe('Bad Request');
});

test('test_401', () => {
  const map = new ErrorRepository();
  const result = map.translate(401);

  expect(result).toBe('Unauthorized');
});

test('test_402', () => {
  const map = new ErrorRepository();
  const result = map.translate(402);

  expect(result).toBe('Payment Required');
});

test('test_403', () => {
  const map = new ErrorRepository();
  const result = map.translate(403);

  expect(result).toBe('Forbidden');
});

test('test_404', () => {
  const map = new ErrorRepository();
  const result = map.translate(404);

  expect(result).toBe('Not Found');
});

test('test_407', () => {
  const map = new ErrorRepository();
  const result = map.translate(407);

  expect(result).toBe('Proxy Authentication Required');
});

test('test_408', () => {
  const map = new ErrorRepository();
  const result = map.translate(408);

  expect(result).toBe('Request Timeout');
});

test('test_505', () => {
  const map = new ErrorRepository();
  const result = map.translate(505);

  expect(result).toBe('Unknown error');
});

test('test_500', () => {
  const map = new ErrorRepository();
  const result = map.translate(500);

  expect(result).toBe('Unknown error');
});