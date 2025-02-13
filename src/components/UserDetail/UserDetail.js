import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./css/styles.css";

const UserDetail = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <div>No se encontró el usuario.</div>;
  }

  return (
    <div className="container">
      <h2>Detalles del Usuario</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Empresa:</strong> {user.company.name}</p>
      <p><strong>Sitio Web:</strong> {user.website}</p>
      <br></br>
      <Link to="/" className="back-button">Volver a la lista</Link>
    </div>
  );
};

export default UserDetail;
