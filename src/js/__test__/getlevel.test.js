import { getLevel } from '../getlevel';
import fetchData from '../fetchdata';

jest.mock('../fetchdata');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Testing send `getLevel` function ', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('Testing `getLevel` function with a status `OK`', () => {
  fetchData.mockReturnValue({ status: 'OK', level: '2' });
  expect(getLevel(2)).toBe('Ваш текущий уровень: 2');
});
