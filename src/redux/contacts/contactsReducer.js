import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
  submit,
  deleteContact,
} from "./contactsActions";

import * as contactAPI from "./contactsApi";

const entities = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [submit]: (state, { payload }) => {
    if (state.some((el) => el.name === payload.name)) {
      alert("There is already contact with the same name");
      return state;
    }
    contactAPI.postContact(payload);
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) => {
    const clearedContacts = state.filter((contact) => contact.id !== payload);
    contactAPI.deleteContact(payload);
    return clearedContacts;
  },
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsError]: () => false,
  [fetchContactsSuccess]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
});

export default combineReducers({ entities, isLoading, error });
