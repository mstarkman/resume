import PropTypes from 'prop-types'

const Icon = ({ iconName }) => (
  <span className="icon">
    <i className={`fa fa-${iconName}`} />
  </span>
)

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
}

export default Icon
