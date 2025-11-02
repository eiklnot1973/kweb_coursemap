import './App.css'

function App() {

  return (
    <div className="container">
      <div className="header">
        <div className="title">정보대학 이수체계도</div>
        <div className="auth">
          <span>로그인</span>
          <span>회원가입</span>
        </div>
      </div>
      <div className="main">
        <button className="department">컴퓨터학과</button>
        <button className="department">데이터과학과</button>
        <button className="department"></button>
      </div>
    </div>
  )
}

export default App
