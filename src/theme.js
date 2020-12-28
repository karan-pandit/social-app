import { createMuiTheme, withTheme} from '@material-ui/core/styles';
import { deepOrange, yellow} from '@material-ui/core/colors';

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