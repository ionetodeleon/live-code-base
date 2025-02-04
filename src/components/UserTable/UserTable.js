import React, { useEffect, useState, useMemo } from "react";
import "./css/styles.css";

const UserTable = () => {

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar usuario..."
      />

      <table className="table">
        <thead className="thead">
          <tr>
            <th className="th">Nombre</th>
            <th className="th">Empresa</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="td">Ignacio Oneto</td>
              <td className="td">Thrust Devs</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
