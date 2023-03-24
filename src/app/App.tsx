import { useState } from "react";
import { DivSquare } from "./div";
import { Form } from "./form";

function App() {
  const [map, setMap] = useState();

  return (
    <>
      <main>
        <DivSquare id="map">
          <p>First you need to enter an address!</p>
        </DivSquare>
        <Form></Form>
      </main>
    </>
  );
}

export default App;
