import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Auth(){
    const [mode, setMode] = useState("signup")
    const [error, setError] = useState(null)

    const { signup, login } = useAuth()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()

    function onSubmit(data){
        setError(null)

        let result;

        if(mode === "signup"){
            result = signup(data.email, data.password)
        } else {
            result = login(data.email, data.password)
        }

        if(result.success) {
            navigate('/')
        } else {
            setError(result.message)
        }
    }

    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title" data-mode={mode}>
                        {mode === "signup" ? "Sign Up" : "Login"}
                    </h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="auth-form">
                        { error && <div className="error-message">{ error }</div>}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" {...register("email", {required: "Email is required"})} className="form-input" />
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" {...register("password", {required: "Password is required", minLength: {value: 8, message: "Password must be at least 8 characters long"}})} className="form-input" />
                            {errors.password && <span className="form-error">{errors.password.message}</span>}
                        </div>

                        <button type="submit" data-mode={mode} className="btn btn-primary btn-large">
                            {mode === "signup" ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    <div className="auth-switch">
                        {mode === 'signup' ? (
                            <p>
                                Already have an account? 
                                <span className="auth-link" onClick={() => setMode("login")}>
                                    Login
                                </span>
                            </p>
                        ) : (
                            <p>
                                Don't have an account? 
                                <span className="auth-link" onClick={() => setMode("signup")}>
                                    Sign Up
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}