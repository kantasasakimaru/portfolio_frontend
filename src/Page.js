import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './ProgressBar';
import AppBar from './AppBar';
import styled from 'styled-components';
import Card from './TechIntroduction';
import Introduction from './ Introduction';
import Connect from './Connect';

const IntroductionSpace = styled.div`
    margin: 54px;
    margin-top:24px;
`;

const classes = makeStyles({
    root: {
        width: '1400px',
        margin: 'auto',
        width: '90%',
    },
});

class App extends Component {
    // classes = useStyles();

    render() {
        return (
            <Paper className={classes.root}>
                <ProgressBar />
                <AppBar />
                <IntroductionSpace>
                    <Introduction />
                </IntroductionSpace>
                <Card />
                <Connect />
            </Paper>
        )
    }
}

export default App;