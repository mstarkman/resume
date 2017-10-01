import { injectGlobal } from 'styled-components'
import { baseFontColor } from './styles/colors'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body,
  button, 
  input, 
  select, 
  textarea {
    font-family: 'Asap', sans-serif;
    color: ${baseFontColor};
  }
`
