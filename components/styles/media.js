import { css } from 'styled-components'

const touchOnly = (...args) => css`
    @media (max-width: 1007px) {
      ${css(...args)}
    }
  `

const nonTouch = (...args) => css`
    @media (min-width: 1008px) {
      ${css(...args)}
    }
  `

export {
  nonTouch,
  touchOnly,
}
