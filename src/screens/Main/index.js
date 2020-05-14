import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";
import { func } from "prop-types";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const columns = {
    idUser: "id user",
    firstName: "first name",
    lastName: "last name"
  }

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [order, setOrder] = useState({});

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const deleteSelectedUser = (selectedUser) => {
    setUsers(users.filter(u => (
      u.idUser != selectedUser.idUser
    )))
  }

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const sortTable = (column, o) => {
    let sortableItems = [...users];

    sortableItems.sort(function (a, b) {
      let comparison = 0;
      let key = Object.keys(columns).find(key => columns[key] === column);

      if (a[key] > b[key]) {
        comparison = 1;
      } else if (a[key] < b[key]) {
        comparison = -1;
      }
      if (o === "asc") {
        setOrder("desc");
        return comparison;
      } else {
        setOrder("asc");
        return (comparison * -1)
      }
    });
    setUsers(sortableItems);
  }

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          deleteSelectedUser={deleteSelectedUser}
          sortTable={sortTable}
          order={order}
          columnsNames={columns}
        />
      </div>
    </>
  );
}
