import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block',
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },

}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function BackToTop(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    {<img className="Img-Nav" width="150" src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="LogoNav" />}
                    <Typography className={classes.root}>

                        <Link to="/" className="space_link" variant="h5" color="inherit">
                            <b></b>{'Home'}
                        </Link>
                        <Link to="/Episodios" className="space_link" variant="h5" color="secondary">
                            Episodios
                        </Link>
                        <Link to="/Personajes" className="space_link" variant="h5" color="secondary">
                            Personajes
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
