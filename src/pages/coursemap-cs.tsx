import DiagramCS from "./diagram-cs";

function CoursemapCS() {
  return (
    <div className="container">
      <div className="header">
        <div className="title">정보대학 이수체계도</div>
        <div className="auth">
          <span>로그인</span>
          <span>회원가입</span>
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
        <div className="title">컴퓨터학과</div>
      </div>
      <div style={{
        width: '90vw',
        height: '400px',
        boxSizing: 'border-box',
        margin: '0 5vw 0 5vw',
        border: '1px solid #cfcfcf'
      }}>
        <DiagramCS />
      </div>
    </div>
    );
}

export default CoursemapCS