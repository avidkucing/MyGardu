import {ADD, EDIT, DELETE} from './actionTypes';

export const editContent = content => ({
  type: EDIT,
  payload: content,
});

export const addContent = content => ({
  type: ADD,
  payload: content,
});

export const deleteContent = content => ({
  type: DELETE,
  payload: content,
});
