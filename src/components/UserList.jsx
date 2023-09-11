import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "../redux/actions/userActions";
import User from "./User";

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsersRequest());


        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => dispatch(fetchUsersSuccess(data)))
            .catch((error) => dispatch(fetchUsersFailure(error)));
    }, [dispatch]);



    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <>
                    {users.map((user) => (
                        <>
                            <User key={user.id} user={user} />
                        </>
                    ))}

                </>
            )}
        </div>
    );
};

export default UserList;
