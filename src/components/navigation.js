import { NavLink } from 'react-router-dom';

const Nav = () => {
  const naviLink = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      name: 'Quote',
      path: '/quotes',
    },
  ];

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        MM-REACT
      </a>
      <ul className="navibar-nav">
        {naviLink.map(({ id, name, path }) => (
          <li key={id} className="nav-item">
            <NavLink className="nav-link" to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
