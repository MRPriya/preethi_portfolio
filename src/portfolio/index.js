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
import Card from "@mui/material/Card";
import 'portfolio/portfolio.css';
// Material Kit 2 React components
import MKBox from "components/MKBox";

// About Us page sections
import Information from "portfolio/Information";
import Education from "portfolio/Education";
import Work from "portfolio/Work";
import Hobbies from "portfolio/Hobbies";

function Portfolio() {
  return (
    <>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Education />
        <Work />
        <Hobbies />
      </Card>
      <MKBox pt={6} px={1} mt={6}></MKBox>
    </>
  );
}

export default Portfolio;
