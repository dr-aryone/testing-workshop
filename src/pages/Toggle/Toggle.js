import React, { useState } from "react";
import Title from "../../components/Title/Title";

const Toggle = () => {
  const [show, toggleShow] = useState(false);

  return (
    <div data-testid="toggleContainer">
      <Title title="Toggle" />
      <button onClick={() => toggleShow(!show)} data-testid="toggleButton">
        Toggle Paragraph
      </button>
      {show && (
        <p data-testid="toggleParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est
          facere veniam vel hic nemo quaerat doloremque iste sint corrupti?
          Totam voluptatem consequatur sed vel enim repudiandae ad dolor
          facilis!
        </p>
      )}
    </div>
  );
};

export default Toggle;
