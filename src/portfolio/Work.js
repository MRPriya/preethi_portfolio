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


  import MKTypography from "components/MKTypography";

  function Work() {
    return (
    <>
      <div>
        <Container>
          <Grid container alignItems="center">
            <Grid item sx={12} md={12}>
              <MKTypography variant="h4" style={{textAlign:'center'}}>Work Experience</MKTypography>
              <div style={{display:"flex", paddingTop:'22px'}}>
                <Grid item sx={12} md={6}>
                  <MKTypography variant="h5">Accenture</MKTypography>
                </Grid>
                <Grid item sx={12} md={6}>
                  <p className="p-text">July 2021 - Aug 2022</p>
                </Grid>
              </div>
              <div>
                <p className="ul-style" style={{textAlign:'justify', padding:'0px'}}>
                  In July 2021, I joined Accenture again and got into a different project, AT&amp;T.
                  Even though in my previous five years of experience, I was into insurance
                  projects, through the AT&amp;T project, I received new experience of working on a
                  telecommunication project.
                </p>
                <br/>
                <div className="work-highlights">Highlights:</div>
                <br/>
                <ul className="ul-style" style={{paddingLeft:'27px'}}>
                  <li>I have worked with several experienced professionals and gauged that
                      the essentials of the industry have been a significant highlight of my
                      career trajectory.</li>
                  <li>I have worked on code migration to the cloud, which involved
                      understanding and analyzing the requirements, planning the flow, and
                      learning how to migrate the code.</li>
                  <li>In this project, the team size was 10, providing knowledge transfer to
                      the new joiners by utilizing my experience.</li>
                  <li>Prepared Unit and Assembly Test plans and executed the same.</li>
                  <li>I Played a crucial role in developing multiple new JCLs and programs
                      from scratch to generate reports that clients could further use to
                      reduce the manual work.</li>
                  <li>I was part of the production release and provided client support during
                      production checkout.</li>
                </ul>
                <br/>
                <div className="work-highlights">Appreciations:</div>
                <br/>
                <ul className="ul-style" style={{paddingLeft:'27px'}}>
                  <li>I received appreciation from the associate manager and manager of the
                      team for my fast-paced work.</li>
                  <li>My teammates admired me when I supported them with ideas to
                      minimize their work.</li>
                  <li>Received recognition from the team lead for my agility work.</li>
                </ul>
              </div>
              <br/>
              <div style={{display:"flex", paddingTop:'22px'}}>
                <Grid item sx={12} md={6}>
                  <MKTypography variant="h5">Mindtree</MKTypography>
                </Grid>
                <Grid item sx={12} md={6}>
                  <p className="p-text">Sep 2019 - July 2021</p>
                </Grid>
              </div>
              <div>
                <p className="ul-style" style={{textAlign:'justify', padding:'0px'}}>
                  After being a part of Accenture for three years, I joined Mindtree in 2019 as
                  Senior Software Engineer. Here as well, I was recognized based on the work I
                  was delivering. I was part of American based projects, AIG and Voya.
                </p>
                <br/>
                <div className="work-highlights">Highlights:</div>
                <br/>
                <ul className="ul-style" style={{paddingLeft:'27px'}}>
                  <li>At Mindtree, I was a part of two projects , one with the team size of 9
                      and other with the team size of 30.</li>
                  <li>In both the projects, I played a crucial part of handling all challenging
                      assignments along with the teams.</li>
                  <li>The voya project was built from scratch as it was new to Mindtree.
                      Tasks included developing the code from the start and implementing
                      the same to production and maintaining the same without any defects.</li>
                  <li>Worked on simplification of the DB2 tables. Worked on a task where a
                      new DB2 table was introduced, using which all data related to one
                      stream can be fetched based on transaction level. Whereas earlier
                      multiple tables were used to do the same work.</li>
                  <li>Reconciliation on the table updates or reports generated were taken
                      care.</li>
                  <li>Scheduling changes using CA7 for the new jobs introduced as well as for
                      the decommission of old jobs.</li>
                  <li>Hands-on experience in IBM - Cobol, CICS, JCL, DB2, Endevor, IBM
                      debugging tool (Xpeditor), File-aid, Abend-aid, SPUFI, data
                      investigator, file manager, QMF.</li>
                </ul>
                <br/>
                <div className="work-highlights">Appreciations:</div>
                <br/>
                <ul className="ul-style" style={{paddingLeft:'27px'}}>
                  <li>Received SPOTON Award twice.</li>
                  <li>CREST Team Award.</li>
                  <li>Three manager awards.</li>
                  <li>Two peer awards.</li>
                </ul>
              </div>
              <br/>
              <div style={{display:"flex", paddingTop:'22px'}}>
                <Grid item sx={12} md={6}>
                  <MKTypography variant="h5">Accenture</MKTypography>
                </Grid>
                <Grid item sx={12} md={6}>
                  <p className="p-text">June 2016 - July 2019</p>
                </Grid>
              </div>
              <div>
                <p className="ul-style" style={{textAlign:'justify', padding:'0px'}}>
                  Upon graduating in Instrumentation Technology in 2016, I started my
                  professional journey with Accenture as my first exposure to the corporate
                  world. I got trained under one of the oldest and most significant streams,
                  Mainframe.
                </p>
                <p className="ul-style" style={{textAlign:'justify',paddingTop:'6px',paddingLeft:'0px'}}>
                  I was part of an Australian-based insurance project called QBE, considered one
                  of Accenture&#39;s diamond clients.
                </p>
                <br/>
                <div className="work-highlights">Highlights:</div>
                <br/>
                <ul className="ul-style" style={{paddingLeft:'27px'}}>
                  <li>I have created more than 40 detailed design documents to create a roadmap on the requirements.</li>
                  <li>I have handled approximately 45+ application management enhancement projects within the QBE project.</li>
                  <li>I have been part of projects that needed cross-functional teams to work together.</li>
                  <li>We used JIRA as project tracking software.</li>
                  <li>There would be monthly knowledge transfer meetings, where team developers would present the changes introduced to the application to the &apos;application management team&apos;.</li>
                  <li>I&apos;ve given demonstrations/showcases of the projects I&apos;ve worked on to the clients to show the outcomes.</li>
                  <li>Provided knowledge transfer to the new joiners by utilising my experience.</li>
                  <li>I&apos;ve been part of a team with 35 Mainframe teammates.</li>
                  <li>Along with being proactive in the team, I was responsible for dealing with the client side, which helped me establish, build, and manage corporate relationships with the clients.</li>
                  <li>Understanding their requirements and implementing the same, which, over time, provided complete lifecycle support from requirement analysis to design, coding, unit testing, debugging, implementation, and integration.</li>
                </ul>
                <br/>
                <div className="work-highlights">Appreciations:</div>
                <br/>
                <ul className="ul-style" style={{paddingLeft:'27px'}}>
                  <li>I have received an appreciation certificate from the senior manager for
                      all my contributions to the team.</li>
                  <li>One of my most challenging clients appreciated my presentation skills
                      and how my showcases always run smoothly.</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
    );
  }

  export default Work;