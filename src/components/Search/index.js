import React, { useState } from "react";
import { Container, Input } from "./styled";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <Container >
      <form>
        <Input
          type="text"
          className="form-control"
          placeholder="Buscar Pokemon"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </Container>
  );
};

export default Search;
