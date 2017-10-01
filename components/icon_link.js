import PropTypes from 'prop-types'
import Icon from './icon'

const IconLink = ({ className, href, iconName, text }) => (
  <a className={className} href={href}>
    <Icon iconName={iconName} />
    <span>{text}</span>
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
