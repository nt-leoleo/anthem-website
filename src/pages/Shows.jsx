const Shows = () => {
    const shows = [
        { date: "20 dic 2026", city: "San Luis", venus: "Hospital Dr. Ramón Carrillo" },
        { date: "31 dic 2027", city: "Los Santos, EEUU", venus: "Grove Street"},
        { date: "03 ene 1987", city: "EEUU", venus: "Freddy's Fazbear Pizzería, Family & Dinner"}
    ];
    return (
        <section>
            <h1>Fechas Próximas</h1>

            {shows.length === 0 ? (
                <h2>No hay eventos anunciados.</h2>
            ) : (
                <ul>
                    {shows.map((show, index) => (
                        <li key={index}>
                            <strong>{show.date}</strong> -- [show.city] | {show.venus}
                        </li>
                    ))}            
                </ul>
            )}
        </section>
    );
}

export default Shows;