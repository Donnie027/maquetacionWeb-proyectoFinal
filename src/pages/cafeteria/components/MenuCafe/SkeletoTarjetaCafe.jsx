
import './styles.css'

export const SkeletoTarjetaCafe = () => {
  return (
    <li className="carta-cafe skeleton">
      <div className="contenedor-cafe-img skeleton-box"></div>
      <div className="contenedor-cafe-texto">
        <div className="skeleton-line short"></div>
        <div className="skeleton-line"></div>
      </div>
    </li>
  )
}
