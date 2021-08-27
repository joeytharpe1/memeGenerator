import React from 'react';
import Meme from './Meme';

import {theme} from './Theme/theme';
import {ThemeProvider } from '@material-ui/core/styles';

function Main() {
    return (
        <ThemeProvider theme={theme}>
               <Meme />
        </ThemeProvider>
    )
}

export default Main
