import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const AddFriendForm = () => {
        const [newFriend,setNewFriend] = useState({
            id:Date.now(),
            name:'',
            age:'',
            email:''
        })

        const handleChange= (e) => {
            setNewFriend({
                ...newFriend,[e.target.name]:e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            axiosWithAuth().post("http://localhost:5000/api/friends",newFriend)
            .then(res=>{
                console.log(res)
            })
        }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Friend Name"
                value={newFriend.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                id="age"
                placeholder="Friend age"
                value={newFriend.age}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                id="email"
                placeholder="Friend email"
                value={newFriend.email}
                onChange={handleChange}
            />
            <button>Add Friend</button>
        </form>
    )
}

export default AddFriendForm;
