function Header() {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <a href="https://github.com/SashaIvkov" className="brand-logo">React Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/SashaIvkov" target="_blank" rel="noreferrer">Проекти</a></li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
