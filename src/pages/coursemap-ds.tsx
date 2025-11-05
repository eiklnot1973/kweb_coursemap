import { NavLink } from 'react-router'

function CoursemapDS() {
    return (
      <div className="container">
        <div className="header">
          <NavLink to="/" className="title">정보대학 이수체계도</NavLink>
          <div className="auth">
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90vw',
          height: '70px',
          color: 'black',
          backgroundColor: '#f1f1f1',
          padding: '1rem 2rem',
          boxSizing: 'border-box',
          margin: '35px 5vw 0 5vw'
        }}>
            <div className="title">데이터과학과</div>
        </div>
      </div>
    );
}

export default CoursemapDS