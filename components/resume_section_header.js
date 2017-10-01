import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.h3`
  font-weight: 600 !important;
`

const ResumeSectionHeader = ({ text }) => (
  <Header>
    {text}
  </Header>
)

ResumeSectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ResumeSectionHeader
