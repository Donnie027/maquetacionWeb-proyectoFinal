const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  
export const HeaderCafeteria = () => {
  return (
    <header>
        <button onClick={() => handleScroll('inicio-cafe')}>
            <div className="icon" id='hogar'></div>
            Inicio
        </button>

        <button onClick={() => handleScroll('menu-cafe')}>
            <div className="icon" id='cafe'></div>
            Café
        </button>

        <button onClick={() => handleScroll('menu-postres')}>
            <div className="icon" id='rebanada'></div>
            Postres
        </button>
    </header>
  )
}
