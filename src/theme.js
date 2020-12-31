import { createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#039be5',
        contrastText: '#fff',
      },
      secondary: {
        main: '#ff3d00',
        contrastText: '#000',
      },
    },
  });

// theme.overrides = {
//   MuiCssBaseline: {
//     '@global': {
//       body: {
//       backgroundColor:'#ffff00'
//       }
//     }
//   }
// }