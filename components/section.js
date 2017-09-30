import PropTypes from 'prop-types'

const Section = ({ children }) => (
  <section className="section">
    <div className="container">
      {children}
    </div>
  </section>
)

Section.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
}

export default Section
