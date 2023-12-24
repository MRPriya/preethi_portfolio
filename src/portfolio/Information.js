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

function Information() {
  return (
  <>
    <MKBox component="section" py={12} style={{paddingBottom:'60px'}}>
      <Container>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={6} md={6}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1} style={{marginBottom:'0px'}}>
                <MKTypography variant="h3">Preethi Marenahalli Ramadas</MKTypography>
              </MKBox>
              <div className="contact">
                <pre>+1-604-537-1509 | </pre>
                <pre><a href="preethimr3@gmail.com">preethimr3@gmail.com</a> | </pre>
                <pre><a href="https://linkedin.com/in/preethi-m-r">https://linkedin.com/in/preethi-m-r</a></pre>
              </div>
              <div className="intro">
                 An extroverted Senior Software Engineer with six years of diverse experience
                 handling key responsibilities for renowned clients like AT&T, QBE, Voya, and AIG.
                 Proficient in the end-to-end software development lifecycle, from creating
                 detailed design documents to coding to seamless implementation. Known for
                 adeptly representing development teams in client interactions. Leveraging this
                 extensive experience alongside an MBA to transition into a managerial role. <br />
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            </Grid>
        </Grid>
      </Container>
    </MKBox>
    <Container>
      <div className="skillDiv">My Skills</div>
      <div className="skillsP">Team Leadership • Time Management • Technical Writing • Communication • Building Trust</div>
    </Container>
  </>
  );
}

export default Information;