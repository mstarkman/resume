import PropTypes from 'prop-types'

const Container = ({ className, children }) => (
  <div className={`container ${className}`}>
    {children}
  </div>
)

Container.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  className: PropTypes.string,
}

Container.defaultProps = {
  children: null,
  className: '',
}

export default Container
