import styled from 'styled-components'
import Container from './container'
import Section from './section'
import { resumeBackground } from './styles/colors'

const StyledSection = styled(Section)`
  position: relative;
  padding-top: 104px;
`

const StyledResumeBody = styled(Container)`
  background-color: ${resumeBackground};
  height: 2000px;
  border-radius: 4px;
  box-shadow: 0 6px 10px 0 rgba(2,3,0,.14), 0 1px 18px 0 rgba(2,3,0,.12), 0 3px 5px -1px rgba(2,3,0,.2)
`

const ResumeBody = () => (
  <StyledSection raised>
    <StyledResumeBody>
      here is the resume body!
    </StyledResumeBody>
  </StyledSection>
)

export default ResumeBody
