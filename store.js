import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {EDIT} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import FilesystemStorage from 'redux-persist-filesystem-storage'

import {initialData} from './data';

const persistConfig = {
  key: 'gardu',
  storage: FilesystemStorage,
};

const initialState = {
  all: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case EDIT: {
      const {id, name, lat, long} = action.payload;
      let selected = state.all[id];

      selected.name = name;
      selected.lat = lat;
      selected.long = long;

      state.all[id] = selected;

      return state;
    }
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
