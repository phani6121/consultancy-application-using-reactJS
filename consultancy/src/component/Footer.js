import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#FAF0E6" }}>
            <div style={{ marginTop: "30px" }}>

                <ul style={{ display: "flex", gap: "190px", justifyContent: "center", listStyleType: "none", borderBottom: "2px solid #FFDEAD", paddingBottom: "40px", boxSizing: "border-box", width: "100%" }}>
                    <li>
                        <a href="./" style={{ textDecoration: "none", fontSize: "20px" }}>About</a>
                    </li>
                    <li>
                        <a href="./" style={{ textDecoration: "none", fontSize: "20px" }}>Contact</a>
                    </li>
                    <li>
                        <a href="./" style={{ textDecoration: "none", fontSize: "20px" }}>Terms Of Use</a>
                    </li>
                    <li>
                        <a href="./" style={{ textDecoration: "none", fontSize: "20px" }}>Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div>
                <p style={{ padding: "0 150px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe delectus itaque accusantium dolores. Facere, sint provident. Saepe pariatur ipsa fuga deserunt optio aliquam sunt dolorem doloribus, nemo, tempora libero.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", margin: "30px 0" }}>
                <FacebookIcon style={{ color: "#0093DD" }} />
                <TwitterIcon style={{ color: "#0093DD" }} />
                <InstagramIcon style={{ color: "#0093DD" }} />
                <GoogleIcon style={{ color: "#0093DD" }} />
                <LinkedInIcon style={{ color: "#0093DD" }} />
                <GitHubIcon style={{ color: "#0093DD" }} />
            </div>
            <div style={{ marginTop: "30px", backgroundColor: "#4169E1", width: "100%" }}>
                <p>© Your Website 2023. All Rights Reserved.</p>
            </div>
        </div>


    )
}

export default Footer