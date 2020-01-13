import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TvIcon from '@material-ui/icons/Tv';
import PeopleIcon from '@material-ui/icons/People';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';



const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(9),
    },
}));


export default function PermanentDrawerLeft() {
    const classes = useStyles();
    const [data, setData] = useState({ episodes: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://rickandmortyapi.com/api/episode',
            );
            setData(pre => ({
                ...pre,
                episodes: result.data.results || []
            }));
        };
        fetchData();
    }, []);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {['Seleccionar por:', 'Antiguo', 'Reciente'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Personajes', 'Episodios'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <PeopleIcon /> : <TvIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <h1>Episodios</h1>
                <div className={classes.toolbar} />
                <div className={classes.root}>
                    <React.Fragment >
                        
                        <Grid item xs={12} >
                            {data.episodes && data.episodes.map(item => ( // así porque data no tiene nada y se valida primero y despues de ciertos milisegundos data tiene algo y despues se procede con el .map
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.episode} -  {item.air_date}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                        </Grid>
                    </React.Fragment>
                </div>
            </main>
        </div>
    );
}
