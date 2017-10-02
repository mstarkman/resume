/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as media from './styles/media'

const Container = styled.div`
  margin-bottom: 40px;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Left = styled.div`
  align-self: flex-start;

  ${media.touchOnly`
    flex: 1 1 100%;
  `}
`

const Right = styled.div`
  ${media.nonTouch`
    align-self: flex-end;
    margin-left: auto;
    line-height: 1.75rem;
  `}
`

const Title = styled.div`
  font-size: 1.25rem;
`

const Place = styled.div`
  font-style: italic;
`

const renderBullets = (bullets) => {
  if (!bullets.length) { return null }

  return (
    <ul>
      {bullets.map((bullet, index) => (
        <li key={index}>
          {bullet}
        </li>
      ))}
    </ul>
  )
}

const Details = ({ bullets, dates, location, place, title }) => (
  <Container>
    <Row>
      <Left>
        <Title>
          {title}
        </Title>
      </Left>
      <Right>
        <div>
          {dates}
        </div>
      </Right>
    </Row>
    <Row>
      <Left>
        <Place>
          {place}
        </Place>
      </Left>
      <Right>
        <div>
          {location}
        </div>
      </Right>
    </Row>
    <Row>
      {renderBullets(bullets)}
    </Row>
  </Container>
)

Details.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.string),
  dates: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Details.defaultProps = {
  bullets: [],
}

export default Details
