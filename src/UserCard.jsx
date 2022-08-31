import React from "react";

const UserCard = ({user}) => {
    return (
        <div className='movie'>
            <div>
                <p>{user.first_name} {user.last_name}</p>
            </div>
        </div>
    )
}

export default UserCard;