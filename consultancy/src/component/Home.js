import React from 'react'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import mobile from "../images/pexels.jpg"
import mobile1 from "../images/code.jpg"
import mobile2 from "../images/laptop.webp"
import mobile3 from "../images/person1.webp"
import mobile4 from "../images/person2.jpg"
import mobile5 from "../images/person3.jpg"





const Home = () => {
    return (
        <div>
            <header style={{ display: "flex", justifyContent: "space-between", margin: "15px 50px" }}>
                <a style={{ textDecoration: "none", fontSize: "20px", fontWeight: "bold" }} href="./" >CONSULTANCY</a>
                <button style={{ padding: "7px 30px", fontSize: "20px", borderRadius: "5px", backgroundColor: "#0093DD", cursor: "pointer", border: "none", fontFamily: "sans-serif" }}>Sign Up</button>
            </header>
            <>
                <div className="background">
                    <div className='content'>
                        <h1>Generate more leads <br /> with a professional <br /> landing page!</h1>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input placeholder='Email Address' type="text" />
                            <button className='dropbtn'>Submit</button>
                        </div>
                    </div>
                </div>
            </>
            <div style={{ display: "flex", justifyContent: "space-evenly", margin: "100px 0", textAlign: "center" }}>
                <div>
                    <BrandingWatermarkIcon style={{ fontSize: "60px", color: "#0093DD" }} />
                    <h1>Fully Responsive</h1>
                    <p style={{ fontSize: "20px" }}>This theme will look great on any <br />device, no matter the size!</p>
                </div>
                <div>

                    <WifiTetheringIcon style={{ fontSize: "60px", color: "#0093DD" }} />
                    <h1>Bootstrap 5 Ready</h1>
                    <p style={{ fontSize: "20px" }}>Featuring the latest build of the new <br /> Bootstrap 5 framework!</p>
                </div>
                <div>

                    <WorkOutlineIcon style={{ fontSize: "60px", color: "#0093DD" }} />
                    <h1>Easy to Use</h1>
                    <p style={{ fontSize: "20px" }}>Ready to use with your own content, <br /> or customize the source files!</p>
                </div>
            </div>
            <div style={{ display: "flex", height: "70vh" }}>
                <div style={{ textAlign: "center", padding: "150px 0px", margin: "0", backgroundColor: "#F8F8FF", width: "50%" }}>
                    <h1>Fully Responsive Design</h1>
                    <p style={{ padding: "0 120px" }}>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                </div>
                <div style={{ width: "50%" }}>
                    <img src={mobile} alt="for design" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </div>
            </div>


            <div style={{ display: "flex", height: "70vh" }}>
                <div style={{ width: "50%" }}>
                    <img src={mobile1} alt="for design" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ textAlign: "center", padding: "150px 0px", margin: "0", backgroundColor: "#F8F8FF", width: "50%" }}>
                    <h1>Updated For Bootstrap 5</h1>
                    <p style={{ padding: "0 120px" }}>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                </div>

            </div>

            <div style={{ display: "flex", height: "70vh" }}>
                <div style={{ textAlign: "center", padding: "150px 0px", margin: "0", backgroundColor: "#F8F8FF", width: "50%" }}>
                    <h1>Easy to Use & Customize</h1>
                    <p style={{ padding: "0 120px" }}>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                </div>
                <div style={{ width: "50%" }}>
                    <img src={mobile2} alt="for design" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </div>
            </div>
            <div>
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <h1>What people are saying...</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", margin: "50px 0" }}>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{
                                height: "200px",
                                width: "200px",
                                objectFit: "cover",
                                borderRadius: "50%"
                            }}
                            src={mobile3}
                            alt="business"
                        />
                        <h1>Margaret E.</h1>
                        <p>"This is fantastic! Thanks so much guys!"</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{
                                height: "200px",
                                width: "200px",
                                objectFit: "cover",
                                borderRadius: "50%"
                            }}
                            src={mobile4}
                            alt="business"
                        />
                        <h1>Fred S.</h1>
                        <p>"Bootstrap is amazing. I've been using it <br /> to create lots of super nice landing <br /> pages."</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{
                                height: "200px",
                                width: "200px",
                                objectFit: "cover",
                                borderRadius: "50%"
                            }}
                            src={mobile5}
                            alt="business"
                        />
                        <h1>Sarah W.</h1>
                        <p>"Thanks so much for making these free <br /> resources available to us!"</p>
                    </div>
                </div>
            </div>
            <div className="background" style={{ height: "50vh" }}>
                <div className='content'>
                    <h3>Ready to get started? Sign up now!</h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <input placeholder='Email Address' type="text" />
                        <button className='dropbtn'>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;