import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const Inventory = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>This is inventory : {user?.email}</h2>
        </div>
    );
};

export default Inventory;