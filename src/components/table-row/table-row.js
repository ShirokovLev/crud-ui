import React from "react";
import {useState} from "react";
import { updateUserInfo, updateUser, removeUser } from '../../actions'
import { useDispatch } from 'react-redux'

const TableRow = ({item})=> {

    const [isChanging, switchChanging] = useState(false)


    const dispatch = useDispatch();

    const onInputChange = (label, id, value)=>{
        dispatch(updateUserInfo(label, id, value))
    }

    const deleteUser = (id)=> {

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://178.128.196.163:3000/api/records/${id}`, requestOptions)
        .then(response => response.json())
        .then(dispatch(removeUser(id)));

    }

    const changeUser = (id)=>{
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: {
                name: item.data.name,
                address: item.data.address,
                phone: item.data.phone
            }})
        };

        fetch(`http://178.128.196.163:3000/api/records/${id}`, requestOptions)
        .then(response => response.json())
        .then(body => dispatch(updateUser(body)));

        switchChanging(false)

    }

    return(
        <>
            <td>
                <input 
                    className="username-input"
                    type="text" 
                    value={item.data.name} 
                    readOnly={isChanging ? false : true}
                    onChange={e => onInputChange("username", item._id, e.target.value)}
                />
            </td>
            <td>
                <input 
                    className="username-input"
                    type="text" 
                    value={item.data.address} 
                    readOnly={isChanging ? false : true}
                    onChange={e => onInputChange("address", item._id, e.target.value)}
                />
            </td>
            <td>
                <input 
                    className="username-input"
                    type="text" 
                    value={item.data.phone} 
                    readOnly={isChanging ? false : true}
                    onChange={e => onInputChange("phone", item._id, e.target.value)}
                />
            </td>
            <td>
                {
                    isChanging ? 
                    <button onClick={() => changeUser(item._id)}>Put on server</button> : 
                    <button onClick={() => switchChanging(!isChanging)}>Change</button>
                }
            </td>
            <td>
                <button onClick={()=> deleteUser(item._id)}>
                    Remove user
                </button>
            </td>
            
        </>
    )
}

export default TableRow