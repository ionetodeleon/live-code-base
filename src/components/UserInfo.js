import { useParams } from "react-router";
import { useEffect, useState } from "react";

const UserInfo = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [id])


    return (
        <div>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
            <p>{user?.website}</p>
            <p>{user?.company.name}</p>
            <p>{user?.address.street}</p>
            <p>{user?.address.city}</p>
        </div>
    )
}

export default UserInfo;