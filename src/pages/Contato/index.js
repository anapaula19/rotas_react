import { Link } from "react-router-dom";

export default function Contato() {
  return(
    <div>
      <h1>Contato</h1>
      <p>aa612691@gmail.com</p>
      <nav>
        <Link to="/">Home </Link><br/>
        <Link to="/sobre"> Sobre</Link>
      </nav>
    </div>
  );
}