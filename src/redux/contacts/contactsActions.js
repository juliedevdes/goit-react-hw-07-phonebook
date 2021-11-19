import { createAction } from "@reduxjs/toolkit";

export const deleteContact = createAction("DELETE_CONTACT");
export const submit = createAction("SUBMIT");

///-----
export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);

export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);

export const fetchContactsError = createAction("contacts/fetchContactsError");
