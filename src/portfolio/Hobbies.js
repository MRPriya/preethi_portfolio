/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//        <Grid container spacing={3} alignItems="center">
//          <Grid item xs={12} lg={6}>
//            <MKBox mb={{ xs: 5, md: 0 }}>
//              <DefaultInfoCard
//                title="Welcome to my Web Development Portofolio!"
//                description="I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality."
//              />
//            </MKBox>
//          </Grid>
//          <Grid item xs={12} lg={6}>
//            <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
//            style={{width:'inherit', height:'inherit'}} className="portimage"/>
//          </Grid>
//        </Grid>

*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import 'portfolio/portfolio.css';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Hobbies() {
  return (
  <>
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={12}>
              <MKTypography variant="h4">Hobbies</MKTypography>
                <div className="ul-style" style={{textAlign:'justify', paddingLeft:'0px'}}>
                  My hobbies revolve around nurturing my creative and intellectual side.
                </div>
                <div className="hobbiesImageDiv">
                  <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                className="hobbiesImage" style={{marginRight:'130px'}}/>
                  <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                className="hobbiesImage"/>
                </div>
                <div>
                  <ul className="ul-style">
                    <li>Reading novels helps me explore diverse stories and broaden
                        my horizons.</li>
                    <li>Painting with acrylic on canvas gives me an outlet for self-
                        expression and allows me to visually capture my
                        imagination.</li>
                    <li>Playing the Indian classical instrument veena immerses me in
                        the rich musical heritage and brings joy through the harmony
                        of its melodies.</li>
                  </ul>
                </div>
            </Grid>
        </Grid>
      </Container>
    </MKBox>
  </>
  );
}

export default Hobbies;