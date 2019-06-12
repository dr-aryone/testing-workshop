import React, { useState } from "react";
import Title from "../../components/Title/Title";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: none;
  cursor: pointer;
`;

const Toggle = () => {
  const [show, toggleShow] = useState(false);

  return (
    <div data-testid="toggleContainer">
      <Title title="Toggle" />
      <StyledButton
        onClick={() => toggleShow(!show)}
        data-testid="toggleButton">
        Toggle Paragraph
      </StyledButton>
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
