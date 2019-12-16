import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((result) => {
      const allPins = result.data;
      const pins = [];
      if (allPins != null) {
        Object.keys(allPins).forEach((pinId) => {
          const newPin = allPins[pinId];
          newPin.id = pinId;
          pins.push(newPin);
        });
      }
      resolve(pins);
    })
    .catch((errorFromGetPinsByBoardId) => reject(errorFromGetPinsByBoardId));
});

export default { getPinsByBoardId };
