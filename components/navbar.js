import styled from 'styled-components'
import { backgroundHover, backgroundPurple, baseFontColor, inverseFontColor } from './styles/colors'

const StyledNavbar = styled.nav.attrs({ className: 'navbar' })`
  background-color: ${backgroundPurple};
  color: ${inverseFontColor};
`

const StyledNavbarItem = styled.div.attrs({ className: 'navbar-item' })`
  color: ${inverseFontColor};
`

const StyleName = StyledNavbarItem.extend`
  font-weight: 600;
`

const StyledNavbarLink = StyledNavbarItem.withComponent('a').extend`
  &:hover {
    background-color: ${backgroundHover} !important;
    color: ${baseFontColor} !important;
  }
`

const Navbar = () => (
  <StyledNavbar aria-label="main navigation">
    <div className="navbar-brand">
      <StyleName>
        Mark Starkman
      </StyleName>
    </div>
    <div className="navbar-end">
      <StyledNavbarLink href="mailto:me@markstarkman.com?subject=Let's%20chat%20about%20your%20resume!">
        <span className="icon">
          <i className="fa fa-envelope-o" ariaHidden="true" />
        </span>
        <span>me@markstarkman.com</span>
      </StyledNavbarLink>
      <StyledNavbarLink href="tel:2672180239">
        <span className="icon">
          <i className="fa fa-phone" ariaHidden="true" />
        </span>
        <span>267-218-0239</span>
      </StyledNavbarLink>
    </div>
  </StyledNavbar>
)

export default Navbar
