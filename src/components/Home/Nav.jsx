function Nav({ setContent }) {
  return (
    <nav className="HomePageNav">
      <ul>
        <li>
          <button onClick={() => setContent("MainArea")}>首頁</button>
        </li>
        <li>
          <button onClick={() => setContent("Resume")}>簡歷</button>
        </li>
        <li>
          <button onClick={() => setContent("Autobiography")}>自傳</button>
        </li>
        <li>
          <button onClick={() => setContent("SideProject")}>作品集</button>
        </li>
        <li>
          <button onClick={() => setContent("ContactMe")}>
            聯絡我 & MyGitHub
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
