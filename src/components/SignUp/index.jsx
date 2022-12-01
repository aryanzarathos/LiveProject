import React from "react";
import { useState } from "react";
import axios from "axios"
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fulName, setFulName] = useState("")
    const handleSignup = async () => {
        if (email &&password &&fulName) {
            let data = {
                email: email,
                password: password,
                fullname: fulName
            }
            let result = await axios.post('http://localhost:5000/liveproject/Signup', data)
            if(result){
                window.alert("signup Success")
            }
        }
    }
    return (
        <div className="small-container">
            <form onSubmit={handleSignup}>
                <h1>Admin Signup</h1>
                <label htmlFor="email">Full Name</label>
                <input
                    id="full_name"
                    type="text"
                    name="full_name"
                    placeholder="admin@example.com"
                    value={fulName}
                    onChange={e => setFulName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="qwerty"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input style={{ marginTop: '12px' }} type="submit" value="Signup" />
            </form>
        </div>
    )
}
export default SignUp