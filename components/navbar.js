const Navbar = () => (
  <nav className="navbar is-primary" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        Mark Starkman
      </div>
    </div>
    <div className="navbar-end">
      <a className="navbar-item" href="mailto:me@markstarkman.com?subject=Let's%20chat%20about%20your%20resume!">
        <span className="icon">
          <i className="fa fa-envelope-o" ariaHidden="true" />
        </span>
        <span>me@markstarkman.com</span>
      </a>
      <a className="navbar-item" href="tel:2672180239">
        <span className="icon">
          <i className="fa fa-phone" ariaHidden="true" />
        </span>
        <span>267-218-0239</span>
      </a>
    </div>
  </nav>
)

export default Navbar
