import {
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
} from "./contactsActions";

import * as contactsAPI from "./contactsApi";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest);

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};
