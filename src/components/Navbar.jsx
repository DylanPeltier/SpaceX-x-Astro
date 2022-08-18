import './../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img width={300} src='./../../public/SpaceX-Logo.wine.png' alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/falcon-9">falcon 9</a>
          </li>
          <li>
            <a href="/falcon-heavy">falcon heavy</a>
          </li>
          <li>
            <a href="/dragon">dragon</a>
          </li>
          <li>
            <a href="/starship">starship</a>
          </li>
          <li>
            <a href="/human-spaceflight">human spaceflight</a>
          </li>
          <li>
            <a href="/rideshare">rideshare</a>
          </li>
          <li>
            <a href="/starlink">starlink</a>
          </li>
          <li>
            <a target="_blank" href="https://shop.spacex.com">shop</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar