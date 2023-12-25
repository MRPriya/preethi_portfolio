/*

*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import 'portfolio/portfolio.css';
import image1 from "assets/images/Img.jpg";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function Information() {
  return (
  <>
    <MKBox component="section" py={12} style={{paddingBottom:'60px'}}>
      <Container>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={6} md={6}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1} style={{marginBottom:'0px'}}>
                <div className="name">Preethi Marenahalli Ramadas</div>
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
              <img src={image1} style={{ borderRadius:'0.75rem' }}/>
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