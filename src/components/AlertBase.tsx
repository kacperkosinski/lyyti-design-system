import { forwardRef, Ref } from 'react';
import { Alert as MuiAlert } from '@mui/material';
import { AlertProps as MuiAlertProps } from '@mui/material';

export interface AlertBaseProps extends MuiAlertProps {
  color?: 'success' | 'info' | 'warning' | 'error';
  severity: 'success' | 'info' | 'warning' | 'error';
  variant: 'standard' | 'filled' | 'outlined';
}

const AlertBase = (
  { severity = 'success', variant = 'standard', sx, ...props }: AlertBaseProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <MuiAlert
      ref={ref}
      severity={severity}
      variant={variant}
      sx={{ alignItems: 'center', '& .MuiAlert-action': { pt: 0, pl: 5 }, ...sx }}
      {...props}
    />
  );
};

export default forwardRef(AlertBase);
