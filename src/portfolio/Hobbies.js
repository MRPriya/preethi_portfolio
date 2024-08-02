import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import 'portfolio/portfolio.css';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import music from "assets/images/music.jpg";
import paint from "assets/images/painting.jpg";

function Hobbies() {
  return (
  <>
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={12}>
              <MKTypography variant="h4" style={{textAlign:'center', paddingBottom:'22px'}}>Hobbies</MKTypography>
                <div className="ul-style" style={{textAlign:'justify', paddingLeft:'0px'}}>
                  My hobbies revolve around nurturing my creative and intellectual side.
                </div>
                <div className="hobbiesImageDiv">
                  <img src={music} className="hobbiesImage" style={{marginRight:'130px'}}/>
                  <img src={paint} className="hobbiesImage"/>
                </div>
                <div>
                  <ul className="ul-style" style={{width:'initial'}}>
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