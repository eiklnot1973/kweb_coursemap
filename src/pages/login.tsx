import { NavLink } from 'react-router'
import './login.css'

function Login() {
    return (
        <div className="login-layout">
        <div className="login-container">
            <NavLink to="/"><div className="login-title">정보대학 이수체계도</div></NavLink>
            <form action="#">
                <div>
                    <input type="text" name="username" placeholder="아이디" required />
                </div>
                <div>
                    <input type="password" name="password" placeholder="비밀번호" required />
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login