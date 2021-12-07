import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {startLoading, stopLoading, updateUsers, addUser} from '../../actions'

import TableRow from "../table-row";

const TableConnected = ()=>{

    const dispatch = useDispatch();

    const { users, isLoading } = useSelector((state) => ({
        users: state.users,
        isLoading: state.isLoading,
    }));

    
    useEffect(
        () => {
            dispatch(startLoading())
            fetch('http://178.128.196.163:3000/api/records')
            .then((response)=>{
                return response.json()
            })
            .then((body)=>{
                dispatch(stopLoading())
                dispatch(updateUsers(body))
            })
        },
        []
    );

    const uploadUser = (e)=>{
        e.preventDefault()

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: {
                name: document.getElementById('name').value,
                address: document.getElementById('address').value,
                phone: document.getElementById('phone').value
            }})
        };

        fetch('http://178.128.196.163:3000/api/records/', requestOptions)
        .then(response => response.json())
        .then(body => dispatch(addUser(body)));
    }

    
    return(
        isLoading ? <p>Loading...</p> :
        
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item)=>{
                        return(
                            <tr key={item._id}>
                                { item.data ? <TableRow item={item}/> : null }
                            </tr>
                        )
                        
                    })
                }
            </tbody>
        </table>
        <p>Put request</p>
        <form action="">
            <input type="text" id="name" placeholder="name"/>
            <input type="text" id="address" placeholder="address"/>
            <input type="tel" id="phone" placeholder="phone"/>
            <a href="#" onClick={uploadUser}>Upload user</a>
        </form>
        </>
    )
    
}

export default TableConnected