import {EDIT} from './actionTypes';

export const editContent = content => ({
  type: EDIT,
  payload: content,
});
