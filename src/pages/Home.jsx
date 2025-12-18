import "../styles/home.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Home() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/41d1e28231.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="home">

      <header>
        <Header />
      </header>
      <main className="lexend">
        <section className="principal">
          <div className="principal-container">
            <h1>
              Bienvenidos a la página oficial del Club Atlético Huracán de Las Varillas
            </h1>

            <p className="funnel-display">
              El Club Huracán nació en 1927 y debe su nombre al Club Atlético Huracán, de la
              ciudad de Buenos Aires. Tuvo su primera cancha 2 cuadras al sudoeste de la actual.
              En 1931 la Familia Álvarez Luque donó el terreno de lo que actualmente es el parque
              Medardo Álvarez Luque, donde el club Huracán desarrolla la mayoría de sus actividades.
              A fines de los años 40 estuvo a punto de desaparecer, habiendo perdido el permiso del
              Ministerio de Salud para utilizar el Parque Álvarez Luque y redujo su actividad a las
              bochas. En los años 50 y 60 resurge con fuerza la actividad deportiva, obteniendo
              importantes logros como el campeonato regional de fútbol en 1963. El 15 de abril de
              1969 una ley nacional devuelve al club el parque Álvarez Luque. El 31 de enero de
              1970 se inaugura el natatorio.
            </p>
          </div>
        </section>

        <div></div>
      </main>

      <a
        href="https://wa.me/5493533402597?text=Hola%20!%20Quiero%20información"
        className="whatsapp-float"
        target="_blank"
        aria-label="Contactar por WhatsApp"
        rel="noopener noreferrer"
      >
        <img
          src="/public/img/WhatsApp.svg.webp"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

        <Footer/>

    </div>
  );
}

