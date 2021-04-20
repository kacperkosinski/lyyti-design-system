import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.grey[200],
      '&$root$root:hover': {
        backgroundColor: '#045b561a',
      },
    },
  })
);

export type RadioProps = MuiRadioProps;

const Radio = (props: RadioProps): JSX.Element => {
  const classes = useStyles();

  return <MuiRadio {...props} classes={{ root: classes.root }} />;
};

export default Radio;
