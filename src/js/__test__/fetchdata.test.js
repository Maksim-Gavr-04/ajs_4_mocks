import fetchData from "../fetchdata";

test('http return Error', () => {
  expect(() => { 
    fetchData('https://server/user/1'); 
  }).toThrow('Mock this!');
});