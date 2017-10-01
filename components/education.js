import Details from './details'
import ResumeSectionHeader from './resume_section_header'

const Education = () => (
  <div className="content">
    <ResumeSectionHeader text="Education" />
    <Details
      dates="Graduated May 1996"
      location="Pittsburgh, PA"
      place="University of Pittsburgh"
      title="Bachelor of Science – Electrical Engineering"
    />
  </div>
)

export default Education
