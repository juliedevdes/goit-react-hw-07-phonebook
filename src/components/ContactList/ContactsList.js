import ContasctsListItem from "../ContactsListItem/ContactsListItem";
import s from "./ContactsList.module.css";

import { useSelector /* useDispatch*/ } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsApi";

function ContasctsList() {
  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts, state.filter)
  );

  //const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .post(`https://619642c1af46280017e7df3d.mockapi.io/phonebook/contacts`, {
    //     name: "jo",
    //     number: 1233,
    //     id: 1255,
    //   })
    //   .then((r) => {
    //     console.log(r);
    //   });

    fetchContacts().then((res) => {
      console.log(res);
    });

    // fetch("https://619642c1af46280017e7df3d.mockapi.io/phonebook/contacts")
    //   .then((r) => r.json())
    //   .then((contactsArray) => {
    //     console.log(contactsArray);
    //   });
  }, []);

  // const addContactOperation = (contact) => (dispatch) => {
  //   const todo = fetch();
  //   dispatch(addContact(todo));
  // };

  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li className={s.item} key={contact.id}>
            <ContasctsListItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContasctsList;
