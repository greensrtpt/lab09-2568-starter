import { useState } from "react"
export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const inputName = (event : any) => {
    setName(event.target.value);
  }

  const [result, setResult] = useState("Please insert your name")
  const [isGreet, setIsGreet] = useState(false);
  const greetOnClick = () => {
    if(name === ""){
      setResult("Please insert your name");
      setIsGreet(false);
    } else{
      setResult(`Hello ${name}`);
      setIsGreet(true);
    }
  }
 
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={inputName}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetOnClick}>Greet Me</button>
      {/* Result Text */}
      <p className={isGreet ? "" : "text-danger"}>{result}</p>
    </div>
  );
}