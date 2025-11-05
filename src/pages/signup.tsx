import { NavLink } from 'react-router'
import './signup.css'

function Signup() {
    return (
        <div className="signup-layout">
        <div className="signup-container">
            <NavLink to="/"><div className="signup-title">정보대학 이수체계도</div></NavLink>
            <form action="#">
                <div>
                    <input type="text" name="username" placeholder="아이디" required />
                </div>
                <div>
                    <input type="password" name="password" placeholder="비밀번호" required />
                </div>
                <div>
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Signup