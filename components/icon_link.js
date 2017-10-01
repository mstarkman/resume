import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './icon'

const StyledText = styled.span`
  margin-left: 5px;
`

const IconLink = ({ className, href, iconName, text }) => (
  <a className={className} href={href}>
    <Icon iconName={iconName} />
    <StyledText>{text}</StyledText>
  </a>
)

IconLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

IconLink.defaultProps = {
  className: '',
}

export default IconLink
