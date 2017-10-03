import { Component } from 'react'
import styled from 'styled-components'
import { backgroundHover, backgroundPurple, baseFontColor, inverseFontColor } from './styles/colors'
import IconLink from './icon_link'
import * as media from './styles/media'

const StyledNavbar = styled.nav.attrs({ className: 'navbar' })`
  position: fixed;
  width: 100%;
  background-color: ${backgroundPurple};
  color: ${inverseFontColor};
  z-index: 20;
`

const StyledNavbarItem = styled.div.attrs({ className: 'navbar-item' })`
  color: ${inverseFontColor};
`

const StyleName = StyledNavbarItem.extend`
  font-weight: 600;
  font-size: 1.25rem;
`

const linkStyling = `
  color: ${inverseFontColor};

  ${media.touchOnly`
    color: red;
  `}

  &:hover {
    background-color: ${backgroundHover} !important;
    color: ${baseFontColor} !important;
  }
`

const StyledNavbarIconLink = styled(IconLink).attrs({ className: 'navbar-item' })`
  ${linkStyling}
  
  ${media.touchOnly`
    color: ${baseFontColor};
  `}
`

const StyledNavbarItemHasDropdown = styled.div.attrs({ className: 'navbar-item has-dropdown is-hoverable' })([])

const StyledNavbarDropdownTrigger = styled.a.attrs({ className: 'navbar-link' })`
  ${linkStyling}
  
  ${media.touchOnly`
    color: ${baseFontColor};
  `}

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

const HamburgerButton = styled.button`
  background-color: ${backgroundPurple};
  border: none;
`

const LettuceTomatoBurger = styled.span`
  background-color: ${inverseFontColor} !important;
  outline: none;
  
  &:hover {
      background-color: ${inverseFontColor} !important;
  }
`

class Navbar extends Component {
  state = {
    isMobileNavShown: false,
  }

  onHamburgerClick = () => {
    this.setState({
      isMobileNavShown: !this.state.isMobileNavShown,
    })
  }

  hamburgerClassName = () => `button navbar-burger ${this.state.isMobileNavShown ? 'is-active' : ''}`
  navbarMenuClassName = () => `navbar-end navbar-menu ${this.state.isMobileNavShown ? 'is-active' : ''}`

  render() {
    return (
      <StyledNavbar aria-label="main navigation">
        <div className="navbar-brand">
          <StyleName>
            Mark Starkman
          </StyleName>
          <HamburgerButton onClick={this.onHamburgerClick} className={this.hamburgerClassName()}>
            <LettuceTomatoBurger />
            <LettuceTomatoBurger />
            <LettuceTomatoBurger />
          </HamburgerButton>
        </div>
        <div className={this.navbarMenuClassName()}>
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
              <StyledNavbarDropdownIconLink
                href="https://www.linkedin.com/in/mstarkman/"
                iconName="linkedin-square"
                text="LinkedIn"
              />
              <StyledNavbarDropdownIconLink
                href="/static/downloads/Mark%20Starkman%20Resume%202017.pdf"
                iconName="file-pdf-o"
                text="PDF Format"
              />
              <StyledNavbarDropdownIconLink
                href="/static/downloads/Mark%20Starkman%20Resume%202017.docx"
                iconName="file-word-o"
                text="Microsoft Word Format"
              />
            </div>
          </StyledNavbarItemHasDropdown>
        </div>
      </StyledNavbar>
    )
  }
}

export default Navbar
