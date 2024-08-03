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
              <MKTypography variant="h4" style={{textAlign:'center', paddingBottom:'12px'}}>Education</MKTypography>
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
                  <li>Authored 14 research papers across various subjects and delivered over 25
                      presentations, showcasing my ability to conduct thorough research and effectively
                      communicate complex ideas.</li>
                  <li>Excelled in the Business Strategy Game, achieving a 40% improvement in simulated
                      company performance through strategic planning and execution, highlighting my
                      capability to drive business growth.</li>
                  <li>Completed comprehensive courses in Leadership and Ethics and Human Resource
                      Management, gaining deep insights into ethical leadership practices and HR
                      strategies.</li>
                  <li>Successfully completed courses in Marketing Management, Managing a Global
                      Organisation, and Global Economic Competitiveness, acquiring a robust
                      understanding of strategic marketing, cross-cultural management, and global market
                      dynamics.</li>
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
                  <li>Published a paper on DCT-based ECG Steganography for Protecting Patient’s
                      Confidential Data in Point-of-Care Systems in IJAREEIE journal, Volume 5, Issue 7, July 2016</li>
                  <li>Completed in-depth courses in Computer Organisation and Architecture, Object-
                      Oriented Programming with C++, and Java &amp; J2EE, developing a strong foundation
                      in system design, programming principles, and enterprise application development.</li>
                  <li>Successfully completed courses in Cloud Computing and Mobile Application
                      Development, gaining advanced skills in designing scalable cloud solutions and
                      creating innovative mobile applications.</li>
                  <li>Delivered over 35 technical presentations throughout the 4-year course, effectively
                      communicating complex engineering concepts to diverse audiences and achieving an
                      average audience engagement rating of 4.5 out of 5.</li>
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