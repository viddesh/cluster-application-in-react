import React from 'react';

import UserList from '../components/UserList'

const User = () => {
    const USERS = [
        { id: "u1", name: "viddesh", image: "https://bankingthefuture.com/wp-content/uploads/2019/04/dummylogo.jpg", place: 3 }
    ]

    return <UserList items={USERS} />
}

export default User