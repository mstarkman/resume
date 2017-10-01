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

const linkStyling = `
  color: ${inverseFontColor};

  &:hover {
    background-color: ${backgroundHover} !important;
    color: ${baseFontColor} !important;
  }
`

const StyledNavbarIconLink = styled(IconLink).attrs({ className: 'navbar-item' })([linkStyling])

const StyledNavbarItemHasDropdown = styled.div.attrs({ className: 'navbar-item has-dropdown is-hoverable' })([])

const StyledNavbarDropdownTrigger = styled.a.attrs({ className: 'navbar-link' })`
  ${linkStyling}
  
  ${StyledNavbarItemHasDropdown}:hover & {
    background-color: ${backgroundHover} !important;
    color: ${baseFontColor} !important;

    &::after {
      border-color: ${baseFontColor};    
    }
  }
  
  &:hover {
    &::after {
      border-color: ${baseFontColor};    
    }
  }
  
  &::after {
    border-color: ${inverseFontColor};
  }
`

const StyledNavbarDropdownIconLink = styled(IconLink).attrs({ className: 'navbar-item' })`
  color: ${baseFontColor};

  &:hover {
    background-color: ${backgroundPurple} !important;
    color: ${inverseFontColor} !important;
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
      <StyledNavbarIconLink
        href="mailto:me@markstarkman.com?subject=Let's%20chat%20about%20your%20resume!"
        iconName="envelope-o"
        text="me@markstarkman.com"
      />
      <StyledNavbarIconLink
        href="tel:2672180239"
        iconName="phone"
        text="267-218-0239"
      />
      <StyledNavbarItemHasDropdown>
        <StyledNavbarDropdownTrigger href="#">
          more
        </StyledNavbarDropdownTrigger>

        <div className="navbar-dropdown is-right">
          <StyledNavbarDropdownIconLink
            href="https://github.com/mstarkman"
            iconName="github"
            text="GitHub"
          />
        </div>
      </StyledNavbarItemHasDropdown>
    </div>
  </StyledNavbar>
)

export default Navbar
