import fetchData from "./fetchdata";

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  // TODO: логика обработки
  if (response.status === 'OK') {
    return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}