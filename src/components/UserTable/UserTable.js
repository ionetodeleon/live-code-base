import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router";
import "./css/styles.css";

const usersPerPage = 3;

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    ).slice((page - 1) * usersPerPage, page * usersPerPage);
  }, [users, search, page]);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar usuario..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table">
        <thead className="thead">
          <tr>
            <th className="th">ID</th>
            <th className="th">Nombre</th>
            <th className="th">Empresa</th>
            <th className="th">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} onClick={() => navigate(`/${user.id}`)}>
              <td className="td">{user.id}</td>
              <td className="td">{user.name}</td>
              <td className="td">{user.company.name}</td>
              <td className="td">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>Previous page</button>
        <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}>Next page</button>
      </div>
    </div>
  );
};

export default UserTable;
