import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [formValues, setFormValues] = useState({});
  const [from, setForm] = useState({ data: [] });

  const handleChange = updatedValue => setFormValues(updatedValue);

  const handleSubmit = submission => {
    setForm({
      data: [...from.data, submission]
    });
  };

  return (
    <div className="App">
      <div className="container my-5 p-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1 className="my-5 text-center">Simple Bootstrap React From</h1>
            <Form onChange={handleChange} onSubmit={handleSubmit} />
            <hr className="my-5" />
            <div>
              <h3 className="mb-3">Output:</h3>
              <pre
                className="mt-2 p-4"
                style={{ backgroundColor: "rgb(230, 230, 230)" }}
              >
                <code>{JSON.stringify(from, null, 2)}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
