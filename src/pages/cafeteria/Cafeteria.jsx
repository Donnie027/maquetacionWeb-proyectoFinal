import { HeaderCafeteria } from './components/Header/HeaderCafeteria';
import './style.css';

export const Cafeteria = () => {
  
  // Función para el desplazamiento suave
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="contenedorCafeteria">
        {/* <header className='headerCafeteria'>
            <h2>Café con leche</h2>
            <button onClick={() => handleScroll('inicio')}>Inicio</button>
            <button onClick={() => handleScroll('menu-postres')}>Postres</button>
        </header> */}

        <section className='section-cafeteria' id="inicio-cafe">
            <div className="difuminadorFondo-cafe"></div>
            <div className="contenedorBienvenida">
                <h1>¡Bienvenido!</h1>
                <h3>y relájate con el sabor del café en varios de sus matices</h3>
                <button onClick={() => handleScroll('menu-cafe')}>Comenzar</button>
            </div>
            <div className="contenedorDescripcion">
           
            </div>
        </section>

        <HeaderCafeteria/>

        <section className='section-cafeteria' id="menu-cafe">
            {/* Contenido del menú de café */}
        </section>

        <section className='section-cafeteria' id="menu-postres">
            {/* Contenido del menú de postres */}
        </section>

        <section className='section-cafeteria'>
            {/* Otro contenido */}
        </section>
    </div>
  );
};
