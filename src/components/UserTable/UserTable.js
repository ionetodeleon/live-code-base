import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/styles.css";
import { Link } from "react-router-dom";

const UserTable = () => {
  let [data, setData] = useState([]);
  let [dataFiltered, setDataFiltered] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  let [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / itemsPerPage)
  );

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setData(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
        paginateData(response.data, 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const search = (evt) => {
    const newData = data.filter((user) => {
      if (
        user.name.toLowerCase().includes(evt.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(evt.target.value.toLowerCase())
      ) {
        return user;
      }
    });
    setTotalPages(Math.ceil(newData.length / itemsPerPage));
    setDataFiltered(newData.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const paginateData = (dataArray, page) => {
    const skip = (page - 1) * itemsPerPage;
    const take = itemsPerPage;
    const paginatedData = dataArray.slice(skip, skip + take);
    setDataFiltered(paginatedData);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      paginateData(data, newPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      paginateData(data, newPage);
    }
  };

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>
      <input
        className="search-input"
        type="text"
        onChange={search}
        placeholder="Buscar usuario..."
      />

      <table className="table">
        <thead className="thead">
          <tr>
            <th className="th">ID</th>
            <th className="th">Empresa</th>
            <th className="th">Nombre</th>
            <th className="th">Email</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((user) => {
            return (
              <tr key={user.id}>
                <td className="td">{user.id}</td>
                <td className="td">{user.company.name}</td>
                <td className="td">
                  <Link
                    to={`/user/${user.id}`}
                    state={{ user }}
                    className="user-link"
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="td">{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
