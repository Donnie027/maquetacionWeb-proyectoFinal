import { useEffect, useState, useRef } from 'react';
import './style.css';

import planetaDesktop from '../../assets/inicio/img/desktop/planetaDesktop.webp';
import superficieDesktop from '../../assets/inicio/img/desktop/superficieDesktop.webp';
import fondoDesktop from '../../assets/inicio/img/desktop/fondoDesktop.webp';

import planetaMobile from '../../assets/inicio/img/mobile/planetaMobile.webp';
import superficieMobile from '../../assets/inicio/img/mobile/superficieMobile.webp';
import fondoMobile from '../../assets/inicio/img/Mobile/fondoMobile.webp';

import { Loader } from '../../loader/Loader';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollY = useRef(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Guardar el número total de imágenes a cargar
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 6; // Total de imágenes que se deben cargar (ajustar si es necesario)
  loadedImages

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      scrollY.current = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPos(scrollY.current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => window.removeEventListener('load', handleWindowLoad);
  }, []);

  // Función para manejar el evento onLoad de las imágenes
  const handleImageLoad = () => {
    setLoadedImages(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === totalImages) {
        setIsLoading(false); // Solo cambia a false cuando todas las imágenes se han cargado
      }
      return newCount;
    });
  };

  const porsentajeTotalScroll = (scrollPos * 100) / window.innerHeight;

  const scalePlanet = 55 + (45 * porsentajeTotalScroll) / 100;
  const positionYPlanet = -25 - (-25 * porsentajeTotalScroll) / 100;
  const moveSurface = window.innerHeight - scrollPos;
  const scaleFondo = 1.5 - 0.5 * (porsentajeTotalScroll / 100);

  return (
    <div className="inicioContenedor">
      {isLoading && <Loader />} {/* Muestra el loader mientras se carga la página */}
      
      <section
        className="fondoParallax"
        style={{
          background: `url(${isMobile ? fondoMobile : fondoDesktop}) no-repeat center/cover`,
          transform: `scale(${scaleFondo})`,
        }}
      ></section>

      <section className="parallax">
        <img
          id="planeta"
          src={isMobile ? planetaMobile : planetaDesktop}
          alt="Planeta"
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}  // Usamos onLoad para cada imagen
          style={{
            transform: `scale(${scalePlanet / 100})`,
            transformOrigin: 'left',
            bottom: `${positionYPlanet}svh`,
          }}
        />

        <img
          id="superficie"
          src={isMobile ? superficieMobile : superficieDesktop}
          alt="Superficie"
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}  // Usamos onLoad para cada imagen
          style={{
            transform: `translateY(${moveSurface / 25}svh)`,
          }}
        />

        <div className="cajaPresentacion">
          
        </div>
      </section>

      <section className="supSection">

        <div className="contenedor-supSection">
          <h2>Proyecto Final</h2>
          <h3>DONNIE</h3>

          <div 
            className={`
              cajaBotones-inicio
              animate__animated
              ${porsentajeTotalScroll >= 80 ? "animate__backInUp" : "animate__backOutDown"}
            `}
          >
            <Link to="">
              Sobre Mí 🐧
            </Link>

            <Link to="/cafeteria">
              Proyecto Cafetería ☕
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
};
