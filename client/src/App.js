import logo from './logo.svg';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.jpg';
import Post from './compnents/Post/Post';
import Form from './compnents/Form/Form';

function App() {
  return (
      <Container maxwidth='lg'>
          <AppBar position="static" color="inherit">
              <Typography variant="h2" align="center">Memories</Typography>
              <img src={memories} alt="memories" height="60" />
          </AppBar>
          <Grow in>
              <Container>
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                      <Grid item xs={12} sm={7}>
                          <post/>
                      </Grid>
                      <Grid item xs={12} sm={7}>
                          <form/>
                      </Grid>
                  </Grid>
              </Container>
          </Container>
  );
}

export default App;
