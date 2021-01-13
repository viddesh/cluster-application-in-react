import React from 'react';
import UserItem from '../components/UserItem';

import '../css/User.css'

const UserList = props => {
    if (props.items.length === 0) {
        return (<div>
            <h2>There is no User Present..</h2>
        </div>
        )
    };

    return (
        <ul className="users-list">
            {props.items.map(user => (
                 <UserItem key={user.id} id={user.id} name={user.name} image={user.image} place={user.place} />
            ))}
        </ul>
    )
}

export default UserList;