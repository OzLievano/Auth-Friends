import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const FriendsList = () => {
    const [friendsList,setFriendsList] = useState([])

    const [error,setError] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/api/friends")
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
            Friends List Here
        </div>
    )
}

export default FriendsList
