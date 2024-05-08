import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={item.title} num={index} question={item.title}>
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
