import { Link } from "react-router-dom";

export default function Sobre() {
  return(
    <div>
      <h1>Sobre React Routes</h1>
      <nav>
        <Link to="/">Home </Link><br/>
        <Link to="/contato"> Contato</Link>
      </nav>
    </div>
  );
}