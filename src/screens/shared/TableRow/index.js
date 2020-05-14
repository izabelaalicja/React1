import React from "react";
import PropTypes from "prop-types";

export default function TableRow({ user, setSelectedUser, selectedUser, deleteSelectedUser }) {
  return (
    <tr
      style={{
        backgroundColor:
          user.idUser == selectedUser.idUser ? "yellow" : "white",
      }}
      onClick={() => setSelectedUser(user)}
    >
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>
        <button className="btn" type="button" onClick={() => deleteSelectedUser(user)}>Delete</button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired
};
