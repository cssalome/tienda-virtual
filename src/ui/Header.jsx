import MenuItems from './MenuItems';
// import 'Header.css'

const Header = () => {
  const menuItems = [
    { link: '/carrito', name:'Carrito'},
    { link: '/login', name:'Login'},
  ];

  return(
    <div className='container'>
      <h1>TiendaVirtual</h1>
      <div>
        <input type="text" placeholder='Buscar productos...'></input>
        <button>Buscar</button>
      </div>
      <nav className='header'>
        <MenuItems menuItems={menuItems}/>
      </nav>
    </div>
  )
}

export default Header