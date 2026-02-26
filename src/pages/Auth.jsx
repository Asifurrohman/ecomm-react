import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Auth(){
    const [mode, setMode] = useState("signup")
    const {register, handleSubmit, formState: {errors}} = useForm()

    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title" data-mode={mode}>
                        {mode === "signup" ? "Sign Up" : "Login"}
                    </h1>
                    <form action="" onSubmit={handleSubmit()} className="auth-form">
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