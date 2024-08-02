import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import 'portfolio/portfolio.css';
import image1 from "assets/images/profile.jpg";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function Information() {
  return (
  <>
    <MKBox component="section" py={12} style={{paddingBottom:'60px'}}>
      <Container>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={7} md={7}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1} style={{marginBottom:'0px'}}>
                <div className="name">Preethi Marenahalli Ramadas</div>
              </MKBox>
              <div className="contact">
                <pre><i className="fas fa-phone" style={{width:'8px'}}/> +1-604-537-1509 | </pre>
                <pre><i className="fas fa-envelope" style={{width:'10px'}}/>
                <a href="preethimr3@gmail.com" style={{paddingLeft:'8px'}}>preethimr3@gmail.com</a> | </pre>
                <pre><i className="fab fa-linkedin-in" style={{width:'3px'}}/>
                <a href="https://linkedin.com/in/preethi-m-r" style={{paddingLeft:'14px'}}>https://linkedin.com/in/preethi-m-r</a></pre>
              </div>
              <div className="intro">
                 Accomplished software development professional with 6+ years of experience, boosting
                 project delivery efficiency by 35% and cutting timelines by 30%. Certified Associate in
                 Project Management (CAPM) with expertise in Agile, Waterfall, Jira, and ServiceNow.
                 Managed high-stakes projects for clients like AT&amp;T, QBE, Voya, and AIG. Proficient in the
                 full software development lifecycle, from design to implementation. Known for representing
                 development teams effectively in client interactions. Leveraging technical expertise and an
                 MBA to transition into a managerial role, combining leadership, innovation, and strategic
                 insight. <br />
              </div>
            </Grid>
            <Grid item xs={5} md={5} lg={5}>
              <img src={image1} style={{ borderRadius:'0.75rem',height:'546px' }}/>
              <div className="tagLine">Bridging Stakeholders &amp; Driving Project Success</div>
            </Grid>
        </Grid>
      </Container>
    </MKBox>
    <Container>
      <div className="skillDiv">My Skills</div>
      <div className="skillsP">Project Management • Stakeholder Management • Communication • Leadership • Time Management</div>
    </Container>
  </>
  );
}

export default Information;