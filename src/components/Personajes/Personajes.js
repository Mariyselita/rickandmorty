import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
        padding: theme.spacing(3),
    },
    media: {
        height: '300px',
        width: '300px'
    }
}));


export default function Personajes() {
    const classes = useStyles();
    const [data, setData] = useState({ characters: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://rickandmortyapi.com/api/character',
            );
            setData(pre => ({
                ...pre,
                characters: result.data.results || []
            }));
        };
        fetchData();
    }, []);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <h1>Personajes</h1>
                <div className={classes.toolbar} />
                <div className={classes.root}>
                    <React.Fragment>
                        <Grid item xs={12}>
                            {data.characters && data.characters.map(item => ( //the same con episodios
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={item.image}
                                            title="Character"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
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
