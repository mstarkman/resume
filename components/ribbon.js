import styled from 'styled-components'
import Container from './container'
import { ribbonBackground } from './styles/colors'
import Section from './section'

const StyledSection = styled(Section)`
  padding: 0;
  position: fixed;
  width: 100%;
`

const StyledRibbon = styled(Container)`
  height: 40vh;
  margin: 0;
  width: 100%;
  max-width: 100%;
  background-color: ${ribbonBackground};
`

const Ribbon = () => (
  <StyledSection>
    <StyledRibbon />
  </StyledSection>
)

export default Ribbon
