import { Link } from "react-router-dom";

export default function Home() {
  return(
    <div>
      <h1>Bem vindo a Home</h1>
      <nav>
        <Link to="/sobre">Sobre </Link><br/>
        <Link to="/contato"> Contato</Link>
      </nav>
    </div>
  );
}