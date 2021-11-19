import { configureStore, createReducer } from "@reduxjs/toolkit";
import { handleFilter } from "./actions";
//import { deleteContact, submit } from "./contacts/contactsActions";
import contactsReducer from "./contacts/contactsReducer";

const filterReducer = createReducer("", {
  [handleFilter]: (_, { payload }) => `${payload}`,
});

// const contactsReducer = createReducer([], {
//   [submit]: (state, { payload }) => {
//     if (state.some((el) => el.name === payload.name)) {
//       alert("There is already contact with the same name");
//       return state;
//     }

//     // window.localStorage.setItem// PUT

//     return [...state, payload];
//   },
//   [deleteContact]: (state, { payload }) => {
//     const clearedContacts = state.filter((contact) => contact.id !== payload);

//     // window.localStorage.setItem //DElETE

//     return clearedContacts;
//   },
// });

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
  // preloadedState: storageContacts, //state.contacts
  devTools: process.env.NODE_ENV === "development",
});

export default store;
