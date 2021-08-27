import React, { useState, useEffect } from 'react';
import { useStyles } from '../componets/Theme/dataTheme';
import { getMemes } from './api/query';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



function Data() {
    const classes = useStyles();
    const [dataMemes, setDataMemes] = useState([]);

    useEffect(() => {
        (async () => {
            const { data: { memes } } = await getMemes();
            setDataMemes(memes);
        })()
    }, [])


    let randomMeme = dataMemes.map((meme) => meme.url);
    let officialMeme = randomMeme[Math.floor(Math.random() * randomMeme.length)];
    console.log(officialMeme);

    const handleClick = () => {
        window.location.reload();
    }

    return (
        <Container className={classes.root}>
            <Container>
                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant='h1' color='primary' alignItems='center' justifyContent='center'>
                            The Meme Thang
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} alignItems='center' justifyContent='center'>
                        <Card elevation={15} className={classes.card} alignItems='center' justifyContent='center'>
                            <CardContent alignItems='center' justifyContent='center'>
                                <img src={officialMeme} height='400px' width="100%" alt='random card' alignItems='center' justifyContent='center' />
                            </CardContent>
                            <Button
                                className={classes.button}
                                variant='contained'
                                onClick={handleClick}>Meme me
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Data
