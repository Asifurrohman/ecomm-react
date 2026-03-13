import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({children}) {
    const [user, setUser] = useState(localStorage.getItem("currentUserEmail") ? { email: localStorage.getItem("currentUserEmail") } : null)

    function signup(email, password){
        const users = JSON.parse(localStorage.getItem('users') || "[]")

        if(users.find(u => u.email === email)){
            return { success: false, message: "Email already exists"}
        }

        const newUser = {
            email,
            password
        }

        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("currentUser", email)

        setUser({ email })

        return { success: true, message: "Signup successful"}
    }

    function login(email, password){
        const users = JSON.parse(localStorage.getItem('users') || "[]")
        const user = users.find(u => u.email === email && u.password === password)

        if(!user){
            return { success: false, message: "Invalid email or password" }
        }

        localStorage.setItem("currentUserEmail", email)
        setUser({ email})

        return { success: true, message: "Login successful"}
    }

    function logout(){
        localStorage.removeItem("currentUserEmail")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ signup, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}