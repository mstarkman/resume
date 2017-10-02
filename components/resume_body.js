import styled from 'styled-components'
import Container from './container'
import Section from './section'
import { resumeBackground } from './styles/colors'
import Summary from './summary'
import Experience from './experience'
import Education from './education'
import * as media from './styles/media'

const StyledSection = styled(Section)`
  position: relative;
  padding-top: 104px;

  ${media.touchOnly`
    padding-top: 72px;
  `}
`

const StyledResumeBody = styled(Container)`
  background-color: ${resumeBackground};
  border-radius: 4px;
  box-shadow: 0 6px 10px 0 rgba(2,3,0,.14), 0 1px 18px 0 rgba(2,3,0,.12), 0 3px 5px -1px rgba(2,3,0,.2);
  padding: 50px;
  
  ${media.touchOnly`
    padding: 20px;
  `}
`

const ResumeBody = () => (
  <StyledSection raised>
    <StyledResumeBody className="is-widescreen">
      <Summary />
      <Experience />
      <Education />
    </StyledResumeBody>
  </StyledSection>
)

export default ResumeBody
