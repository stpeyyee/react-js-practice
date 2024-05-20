import * as React from "react"
import { Button, styled } from "@mui/material"
import { useTheme } from "@emotion/react"
import PropTypes from 'prop-types';
import { purple, blue } from "@mui/material/colors";

// const CustomizedButton = styled(Button)(({ theme }) => ({
//     color: theme.palette.background.default,
//     backgroundColor: theme.palette.primary.main,
//     '&:hover': {
//         backgroundColor: blue[700],
//     },
// }));

const BootstrapButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    color: theme.palette.background.default,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}));
BootstrapButton.propTypes = {
    variant: PropTypes.oneOf(['contained']),
};


export default function BasicButton(props) {
    let { label, onClick } = props
    let theme = useTheme()
    return (
        // <Button variant="contained" onClick={onClick}>{label}</Button>
        // <CustomizedButton></CustomizedButton>
        <BootstrapButton variant="contained" onClick={onClick} disableRipple>
            {label}
        </BootstrapButton>
    )
}