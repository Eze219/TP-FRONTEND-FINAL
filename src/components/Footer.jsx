import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="footer-left">
          <img 
            src="/public/img/escudo huracan.png" 
            alt="Escudo del club" 
          />
        </div>

        <div className="footer-center">
          <h3>Club Atlético Huracán</h3>
        </div>

        <div className="footer-right">
          <a href="https://www.facebook.com/cahuracanlasvarillas/?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/huracanlasvarillas_/?hl=es" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

      </div>

      <hr />

      <p className="footer-copy">
        Todos los derechos reservados © — Ezequiel Melano
      </p>
    </footer>
  );
}

export default Footer;
