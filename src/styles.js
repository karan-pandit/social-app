import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({
    root: {
      flexGrow: 1,
      backgroundColor:'rgb(245,245,245)',
      height:'100vh',
      '& a':{
        textDecoration: 'none'
      }
    },
    container: {
         margin: '80px auto 0 auto',
         maxWidth: '1200px',
    },
    navContainer: {
        margin: 'auto'
    },
    card: {
      display:'flex',
      marginBottom: '20px',
    },
    cardContent: {
      padding: '25px'
    },
    cardImage: {
      minWidth: '200px',
      objectFit: 'cover'
    },
    form: {
      textAlign:'center'
    },
    title: {
      margin: '10px auto 10px auto'
    },
    image: {
      margin: '20px auto 20px auto'
    },
    textField: {
      margin: '10px auto 10px auto'
    },
    errors: {
      color:'red',
      fontSize: '0.8rem',
      margin: '10px'
    },
    link :{
      color: '#039be5',
      cursor: 'pointer'
    },
    button : {
      position: 'relative'
    },
    progress: {
      position: 'absolute'
    }
  }));

