import axios from 'axios';
import './style.css';
import { Avatar, Box, Button, Card, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const Signin = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs((prevInputs) => ({ ...prevInputs, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();  // Prevent default form submission
    console.log("btn clicked");

    axios.post("http://localhost:3008/api/login", inputs)
      .then((res) => {
        console.log(res);
        alert(res.data.message);  // Show the login message
        if (res.data.message === "successfully logged in") {
          localStorage.setItem('userToken', res.data.token);  // Store the token in localStorage
          navigate('/userhome');  // Navigate to the user home page
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='Sign-in'>
      <div className="card" alignitems='center'>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  onChange={inputHandler}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={inputHandler}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="button"  // Changed to button to prevent form submission
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submitHandler}  // Ensure the function is triggered
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <a href="/sign">
                      {"Don't have an account? Sign Up"}
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Signin;
