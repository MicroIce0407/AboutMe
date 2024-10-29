import mypicture from "../../picture/Howard.jpg";

export default function Resume() {
  return (
    <section id="resume" className="reveal">
      <section>
        <h1>簡歷</h1>
      </section>
      <section className="resume">
        <section className="table">
          <table>
            <tbody>
              <tr>
                <td>自我簡介</td>
                <td>My name is Howard!</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>學歷</td>
                <td>內湖高工 電機科畢業、台北科技大學 資訊工程系學士肄業</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>經歷</td>
                <td>
                  <ul>
                    <li>
                      目前就職：台北捷運公司技術維修員(2020/7~)
                      <br />
                      <br />
                      主要負責整個自動收費系統設備的硬體維護及檢修，設備包括車站處理機、數幣機主機、站務員電腦、票卡查詢機、自動售票機及驗票閘門。
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>語言能力</td>
                <td>
                  <ul>
                    <li>中文:精通</li>
                    <li>英文:尚可</li>
                    <li>韓文:緩慢學習中...</li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>擅長語言</td>
                <td>
                  HTML、CSS、JavaScript、React
                  <br />
                  Node.js、Express.js、MongoDB
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>開發經驗</td>
                <td>電商網站 (developing...)</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="picture">
          <img src={mypicture} alt="個人照片" />
        </section>
      </section>
    </section>
  );
}
