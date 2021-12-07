import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from '../../actions'

const Table = ()=>{

    const dispatch = useDispatch();

    const { users } = useSelector((state) => ({
        users: state.users
    }));

    const updateUser = (e)=> {
        e.preventDefault();
        dispatch(addUser(
            {
                "id": document.getElementById('id').value,
                "name": document.getElementById('name').value,
                "email": document.getElementById('email').value,
                "phone": document.getElementById('phone').value,
                "website": document.getElementById('website').value
            }
        ))
    }

    const deleteUser = (id)=> {
        dispatch(removeUser(id))
    }

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.phone}
                                </td>
                                <td>
                                    {item.website}
                                </td>
                                <td>
                                    <button onClick={()=> deleteUser(item.id)}>
                                        Remove user
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <form action="">
            <input id="id" type="number" placeholder="id"/>
            <input id="name" type="text" placeholder="name"/>
            <input id="email" type="email" placeholder="email"/>
            <input id="phone" type="text" placeholder="phone"/>
            <input id="website" type="text" placeholder="website"/>
        </form>
        <a href="#" onClick={updateUser}>Add user</a>
        </>
    )
    
}

export default Table