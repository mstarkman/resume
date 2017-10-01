import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 40px;
`

const Row = styled.div`
  display: flex;
`

const Left = styled.div`
  align-self: flex-start;
`

const Right = styled.div`
  align-self: flex-end;
  margin-left: auto;
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
      {bullets.map(bullet => (
        <li>
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
