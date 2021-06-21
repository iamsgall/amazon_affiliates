import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
    typography: {
      fontFamily: ['DM Sans', 'Cabin Condensed'].join(','),
    },
  },
})

export default theme
