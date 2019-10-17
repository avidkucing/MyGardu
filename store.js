import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {ADD, EDIT, DELETE} from './actionTypes';
// import AsyncStorage from '@react-native-community/async-storage';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import {initialData} from './data';

const persistConfig = {
  key: 'gardu',
  storage: FilesystemStorage,
};

const initialState = {
  all: initialData,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      let newAll = [
        ...state.all,
        {...action.payload, id: state.all[state.all.length - 1].id + 1},
      ];
      return {...state, all: newAll};
    }
    case EDIT: {
      const {id, name, lat, long} = action.payload;

      let newAll = state.all.map(el =>
        el.id === id
          ? {
              ...el,
              name: name,
              lat: lat,
              long: long,
            }
          : el,
      );
      return {...state, all: newAll};
    }
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
