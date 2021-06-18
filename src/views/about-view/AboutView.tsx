import React, { memo } from 'react';
import {
 Box, Card, CardContent, Container, Grid, Typography
} from '@material-ui/core';
import Header from '../../components/header/Header';
import Footer from '../../components/waves/footer-wave/Footer';

const AboutView = () => (
    <>
        <Header />
        <Container maxWidth="md">
            <Box pt={2} pb={5}>
                <Box pb={1}>
                    <Typography variant="h2">
                        Hey! We are MarcoPollo
                    </Typography>
                </Box>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                </Typography>
            </Box>
            <Grid
                direction="row"
                justify="center"
                alignItems="stretch"
                container
                spacing={2}
            >
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our mission
                            </Typography>
                            <Typography variant="body1">
                                Orci phasellus egestas tellus rutrum. Amet consectetur adipiscing elit duis.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our essence
                            </Typography>
                            <Typography variant="body1">
                                Neque volutpat ac tincidunt vitae semper quis. Lacinia quis vel eros donec ac odio tempor.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our promise
                            </Typography>
                            <Typography variant="body1">
                                Donec ac odio tempor orci. Ut pharetra sit amet aliquam id. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our vibe
                            </Typography>
                            <Typography variant="body1">
                                Tristique et egestas quis ipsum suspendisse. Felis bibendum ut tristique et egestas.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <Footer />
    </>
);

AboutView.displayName = 'AboutView';

export default memo(AboutView);
