import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

const FriendsList = () => {
    const [friendsList,setFriendsList] = useState([])

    const [error,setError] = useState([])

    useEffect(()=>{
        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res=>{
            console.log(res)
            setFriendsList(res.data)
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
    })
    return (
        <div>
            {friendsList.map((friend)=>{
                return <div>
                    {friend.name}
                </div>
            })}
        </div>
    )
}

export default FriendsList
