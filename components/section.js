import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSection = styled.section.attrs({ className: 'section' })`
  z-index: ${props => (props.raised ? 10 : 0)}
`

const Section = ({ className, children, raised }) => (
  <StyledSection className={className} raised={raised}>
    {children}
  </StyledSection>
)

Section.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  raised: PropTypes.bool,
}

Section.defaultProps = {
  children: null,
  className: '',
  raised: false,
}

export default Section
