  /*
  =========================================================
  * Material Kit 2 React - v2.1.0
  =========================================================

  * Product Page: https://www.creative-tim.com/product/material-kit-react
  * Copyright 2023 Creative Tim (https://www.creative-tim.com)

  Coded by www.creative-tim.com

   =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  */

  // @mui material components
  import Container from "@mui/material/Container";
  import Grid from "@mui/material/Grid";
  import 'portfolio/portfolio.css';

  // Material Kit 2 React components
  import MKBox from "components/MKBox";

  import MKTypography from "components/MKTypography";

  function Education() {
    return (
    <>
      <MKBox component="section" py={12} style={{paddingTop:'60px'}}>
        <Container>
          <Grid container alignItems="center">
            <Grid item sx={12} md={12}>
              <MKTypography variant="h4">Education</MKTypography>
              <div className="ul-style" style={{textAlign:'justify', paddingLeft:'0px', paddingTop:'10px'}}>
                I hold a BE in Instrumentation Technology and an MBA in
                International Business, providing me with a unique blend of
                technical and non-technical education. This combination equips me
                with a well-rounded skill set to excel in the field of international
                business, allowing me to navigate complex global markets and drive
                business growth.
              </div>
              <br/>
              <div style={{display:"flex"}}>
                <Grid item sx={12} md={6}>
                  <MKTypography variant="h5">MBA in International Business</MKTypography>
                </Grid>
                <Grid item sx={12} md={6}>
                  <p className="p-text">Sep 2022 - Apr 2024</p>
                </Grid>
              </div>
              <div>
                <ul className="ul-style">
                  <li>Through this master&#39;s degree, I have acquired knowledge in both kinds
                      of courses. The first one is mandatory MBA courses. i.e., finance,
                      accounting, economics, operation management, and more.</li>
                  <li>The second kind is marketing management, human resources, global
                      organization management, leadership, and ethics.</li>
                  <li>Through the course &#39;Business Strategy,&#39; I got the experience of how to
                      handle the business as a CEO. In this course, each of us was CEO of a
                      shoe company that operated in different regions of the world and how
                      we could improve the business with aspects of competition, being
                      unique, and how to face the world as business owners.</li>
                  <li>Every course needed multiple presentations, be they individual or in a
                      group, and this helped polish my skills in being vocal and leading
                      groups.</li>
                  <li>Along with academic groups, I am part of a cultural group and have
                      helped the team organise events like Indian Cultural Night.</li>
                </ul>
              </div>
              <br/>
              <div style={{display:"flex"}}>
                <Grid item sx={12} md={6}>
                  <MKTypography variant="h5">Bachelor of Engineering in Instrumentation Technology</MKTypography>
                </Grid>
                <Grid item sx={12} md={6}>
                  <p className="p-text">June 2012 - May 2016</p>
                </Grid>
              </div>
              <div>
                <ul className="ul-style">
                  <li>In addition to physics, chemistry, mathematics, and electronics, I took
                      the course and gained knowledge on OOPS, C++, Networks, Java, mobile
                      application development, and cloud computing.</li>
                  <li>Published a paper on DCT-based ECG Steganography for Protecting
                      Patient’s Confidential Data in Point-of-Care Systems in IJAREEIE
                      journal, Volume 5, Issue 7, July 2016.</li>
                  <li>Led a group of 20 and coordinated for the college fest “8th Mile”.</li>
                  <li>Attended paper drive event twice, aimed at donating the money
                      collected to an orphanage; the event was organized by Rotaract Club,
                      Bengaluru.</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
    );
  }

  export default Education;