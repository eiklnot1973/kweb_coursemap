import { NavLink } from 'react-router'
import './home.css'

function Home() {
    return (
      <div className="container">
        <div className="header">
          <NavLink to="/" className="title">정보대학 이수체계도</NavLink>
          <div className="auth">
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </div>
        </div>
        <div className="main">
          <NavLink to="/coursemap/cs" className="department">컴퓨터학과</NavLink>
          <NavLink to="/coursemap/ds" className="department">데이터과학과</NavLink>
          <NavLink to="/" className="department"></NavLink>
        </div>
      </div>
    );
}

export default Home