import Howard2 from "../../picture/Howard2.png";

export default function MainArea() {
  return (
    <section className="main-area reveal">
      <section className="hello">
        <h2>嗨，我是Howard!</h2>
        <h2>
          我是一位正在自學程式及網頁開發的硬體檢修員，目標要轉職成為網頁全端工程師。
        </h2>
      </section>
      <section className="img">
        <img src={Howard2} alt="Howard2" />
      </section>
    </section>
  );
}
