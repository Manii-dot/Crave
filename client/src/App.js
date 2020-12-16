import React from 'react';
import { CredentialsContainer, AppBar, Typography, Grow, Grid, Container } from '@material-ui/core';

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Crave</Typography>
                <img src={crave} alt="crave" height="60" />
            </AppBar>
        </Container>
    )
}

export default App;