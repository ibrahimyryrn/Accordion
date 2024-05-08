import { useState } from "react";

function AccordionItem({ num, question, children }) {
  const [mark, setMark] = useState(true);

  return (
    <div
      className={mark ? "item" : "item open"}
      onClick={() => setMark((prev) => !prev)}
    >
      <p className="number">{num + 1}</p>
      <p className="title">{question}</p>
      <p className="icon">{mark === true ? "+" : "-"}</p>
      {!mark && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
