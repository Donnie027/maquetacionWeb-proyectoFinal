export const TarjetaCafe = ({ imagen, nombre, precio }) => {
    return (
      <li className="carta-cafe">
        <div className="contenedor-cafe-img">
          <img src={imagen} alt={`Imagen de ${nombre}`} />
        </div>
        <div className="contenedor-cafe-texto">
          <h5>{nombre}</h5>
          <h6>${precio}</h6>
        </div>
      </li>
    );
  };  