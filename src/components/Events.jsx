import { Link } from "react-router-dom";
import "../styles/Events.scss";

function Events() {
  return (
    <section id="events" className="events">
      <h2>Próximos Eventos</h2>
      <ul>
        <li>
          <Link to="/fechas">
            15/10/2025 - Concierto en San Luis - Club X
          </Link>
        </li>
        <li>
          {/* <Link to="/fechas">
            22/10/2025 - Festival Deathcore en Chacarita
          </Link> */}
        </li>
      </ul>
    </section>
  );
}

export default Events;
