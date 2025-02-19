import { useEffect, useState } from 'react';
import './style.css';

const planetaDesktop = 'src/assets/inicio/img/desktop/planetaDesktop.png';
const superficieDesktop = 'src/assets/inicio/img/desktop/superficieDesktop.png';
const fondoDesktop = 'src/assets/inicio/img/desktop/fondoDesktop.png';

const planetaMobile = 'src/assets/inicio/img/mobile/planetaMobile.png';
const superficieMobile = 'src/assets/inicio/img/mobile/superficieMobile.png';
const fondoMobile = 'src/assets/inicio/img/mobile/fondoMobile.png';

export const Inicio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia el estado a true o false dependiendo del tamaño
    };

    // Añade el event listener para el cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Actualiza el estado con la posición del scroll
      console.log('Posición del scroll Y:', window.scrollY); // Imprime la posición en la consola
    };

    // Añade el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calcular el tamaño de la imagen basado en la posición del scroll
  const porsentajeTotalScroll = ((scrollY * 100) / window.innerHeight)

  const scalePlanet = 55 + (45 * porsentajeTotalScroll / 100);
  const positionYPlanet = -25 - ( -25 * porsentajeTotalScroll / 100 )

  const moveSurface = window.innerHeight - scrollY;

  const scaleFondo = 1.5 - (.5 * porsentajeTotalScroll / 100);

  return (
    <div className="inicioContenedor">
      <section className="fondoParallax"
        style={{
          background: `url(${isMobile ? fondoMobile : fondoDesktop}) no-repeat center/cover`,
          transform: `scale(${scaleFondo})`,
          transition: 'transform 0.5s ease-out'
        }}
      ></section>
      <section className='parallax'>
        <img
          id='planeta'
          src={isMobile ? planetaMobile : planetaDesktop}
          alt="Planeta"
          // style={{
          //   transform: `scale(${scalePlanet})`,
          //   left: '0',         
          //   bottom: '', 
          //   transformOrigin: 'left', 
          //   transition: 'transform 0.5s ease-out', 
          // }}
          style={{
            transform: `scale(${ scalePlanet }%)`,
            left: '0',
            bottom: `${positionYPlanet}vh`,
            transformOrigin: 'left',
            transition: 'transform 0.5s ease-out'
          }}
        />
        {
          console.log(scaleFondo)
        }
        <img
          id='superficie'
          src={isMobile ? superficieMobile : superficieDesktop}
          alt="Superficie"
          style={{
            transform: `translateY(${moveSurface/25}%)`,
            transition: 'all .5s ease-in-out'
          }}
        />
      </section>
      <section className='supSection'></section>
    </div>
  );
};
