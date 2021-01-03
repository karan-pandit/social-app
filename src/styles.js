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
      position: 'relative',
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
    },
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        '& button': {
          position: 'absolute',
          top: '80%',
          left: '70%'
        }
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: '#039be5'
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    buttons: {
      textAlign: 'center',
      '& a': {
        margin: '20px 10px'
      }
    },
    submitButton: {
      position: 'relative',
      float: 'right',
      marginTop: 10
    },
    progressSpinner: {
      position: 'absolute'
    },
    closeButton: {
      position: 'absolute',
      left: '91%',
      top: '6%'
    },
    deleteButton: {
      position: 'absolute',
      left: '525px',
      top: '8px'
    },
    commentImage: {
      maxWidth: '100%',
      height: 100,
      objectFit: 'cover',
      borderRadius: '50%'
    },
    commentData: {
      marginLeft: 20
    },
    profileImage: {
      maxWidth: 200,
      height: 200,
      borderRadius: '50%',
      objectFit: 'cover'
    },
    dialogContent: {
      padding: 20
    },
    commentButton: {
      position: 'absolute',
      left: '90%'
    },
    expandButton: {
      position: 'absolute',
      left: '90%'
    },
    spinnerDiv: {
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 50
    }
  }));

