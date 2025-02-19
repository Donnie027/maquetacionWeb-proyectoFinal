import { useEffect, useState, useRef } from 'react';
import './style.css';

import planetaDesktop from '../../assets/inicio/img/desktop/planetaDesktop.webp';
import superficieDesktop from '../../assets/inicio/img/desktop/superficieDesktop.webp';
import fondoDesktop from '../../assets/inicio/img/desktop/fondoDesktop.webp';

import planetaMobile from '../../assets/inicio/img/mobile/planetaMobile.webp';
import superficieMobile from '../../assets/inicio/img/mobile/superficieMobile.webp';
import fondoMobile from '../../assets/inicio/img/Mobile/fondoMobile.webp';

import { Loader } from '../../loader/Loader';

export const Inicio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollY = useRef(0); // Usa useRef para evitar renders innecesarios
  const [scrollPos, setScrollPos] = useState(0); // Solo para cambios visuales
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar el loading
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false); // Estado para el fondo cargado

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
          setScrollPos(scrollY.current); // Actualiza solo en el frame adecuado
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImagesLoad = () => {
    setIsLoading(false);  // Cambia el estado de loading a false cuando las imágenes se cargan
  };

  const handleBackgroundLoad = () => {
    setIsBackgroundLoaded(true);  // Cambia el estado cuando el fondo se carga

    // Establecer un retraso para hacer el cambio menos brusco
    setTimeout(() => {
      setIsLoading(false);  // Desactiva el loading después de 0.5s
    }, 500);  // 500ms = 0.5 segundos
  };

  // Calcular el tamaño de la imagen basado en la posición del scroll
  const porsentajeTotalScroll = (scrollPos * 100) / window.innerHeight;

  const scalePlanet = 55 + (45 * porsentajeTotalScroll) / 100;
  const positionYPlanet = -25 - (-25 * porsentajeTotalScroll) / 100;
  const moveSurface = window.innerHeight - scrollPos;
  const scaleFondo = 1.5 - 0.5 * (porsentajeTotalScroll / 100);

  return (
    <div className="inicioContenedor">
      {isLoading && <Loader />} {/* Muestra el loader mientras se cargan las imágenes */}
      {/* Fondo invisible para rastrear la carga del fondo */}
      {!isBackgroundLoaded && <img src={isMobile ? fondoMobile : fondoDesktop} alt="Fondo" onLoad={handleBackgroundLoad} style={{ display: 'none' }} />}
      
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
          onLoad={handleImagesLoad}
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
          onLoad={handleImagesLoad}
          style={{
            transform: `translateY(${moveSurface / 25}svh)`,
          }}
        />
      </section>

      <section className="supSection"></section>
    </div>
  );
};
