import styled from 'styled-components'
import { backgroundHover, backgroundPurple, baseFontColor, inverseFontColor } from './styles/colors'
import IconLink from './icon_link'

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

const StyledNavbarLink = styled(IconLink).attrs({ className: 'navbar-item' })`
  color: ${inverseFontColor};

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
      <StyledNavbarLink
        href="mailto:me@markstarkman.com?subject=Let's%20chat%20about%20your%20resume!"
        iconName="envelope-o"
        text="me@markstarkman.com"
      />
      <StyledNavbarLink
        href="tel:2672180239"
        iconName="phone"
        text="267-218-0239"
      />
    </div>
  </StyledNavbar>
)

export default Navbar
