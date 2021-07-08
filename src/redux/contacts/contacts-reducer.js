import { combineReducers } from 'redux';
import types from './contacts-types';

const initialState = [
  { name: 'Roby Sedev', number: '458-587-698', id: 'edc199aa-2083-42a3-ab27-1bfe0ec38485' },
  { name: 'Sabo Vert', number: '2586664', id: 'bd68ac99-054f-4a77-a9f5-b731fef759e4' },
  { name: 'Борис', number: '2154111', id: '3b07d095-0e90-4a3e-9e4e-a4394cbaea57' },
];

// const initState = () => {
//       const savedContacts = JSON.parse(localStorage.getItem('contacts'));

//       if (savedContacts) {
//         initialState = [...savedContacts];
//       }

// }

const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
