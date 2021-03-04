import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

import './User.css'
import axios from 'axios'


const User = ({ match, history }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${match.params.id}`
        axios.get(url)
            .then(response => setUser(response.data))
    }, [match.params.id]);

    return (
        <div className="user">
            <h1 >Welcome, this is the User page</h1>
            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="avatar" />
            <h2>{user.name}</h2>
            <h5>{user.username}</h5>
            <h5>{user.email}</h5>
            <h5>{user.phone}</h5>

            <Button variant="info" className="go-back-btn"
                onClick={() => history.goBack()}
            >Go Back</Button>
        </div>
    )
}

export default User;
