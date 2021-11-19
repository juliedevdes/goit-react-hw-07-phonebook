import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
} from "./contactsActions";

const entities = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,

  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

export default combineReducers({ entities, isLoading });
