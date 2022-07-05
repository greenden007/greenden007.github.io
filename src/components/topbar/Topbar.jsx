import "./topbar.scss";
import { EmailTwoTone,  PersonOutlineTwoTone } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Rohan Cherukuri</a>
                    <div className="itemContainer">
                        <PersonOutlineTwoTone className="icon" />
                        <span>+1 630 366 9518</span>
                    </div>
                    <div className="itemContainer">
                        <EmailTwoTone className="icon" />
                        <span>rcherukuri10@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
