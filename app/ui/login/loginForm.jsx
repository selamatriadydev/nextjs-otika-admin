"use client";

import { authenticate } from "@/app/lib/actions";
import Link from "next/link";
import { useFormState } from "react-dom";

const LoginForm = ()=> {
    const [state, formAction] = useFormState(authenticate, undefined);
    return(
        <form
            action={formAction}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                className="form-control"
                name="username"
                tabIndex={1}
              />
              <div className="invalid-feedback">
                Please fill in your email
              </div>
            </div>
            <div className="form-group">
              <div className="d-block">
                <label htmlFor="password" className="control-label">
                  Password
                </label>
                <div className="float-right">
                  <Link href="#" className="text-small">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <input
                id="password"
                type="password"
                className="form-control"
                name="password"
                tabIndex={2}
              />
              <div className="invalid-feedback">
                please fill in your password
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="remember"
                  className="custom-control-input"
                  tabIndex={3}
                  id="remember-me"
                />
                <label className="custom-control-label" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-lg btn-block"
                tabIndex={4}
                >
                Login
              </button>
            </div>
            {state && state}
          </form>
    )
}

export default LoginForm;