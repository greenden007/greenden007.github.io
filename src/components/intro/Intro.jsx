import "./intro.scss";
import { ArrowDownward } from "@material-ui/icons"
import TypeWriter from 'typewriter-effect'

export default function Intro() {

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/daPic.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Rohan Cherukuri</h1>
                    <h3>Aspiring<span>
                    <TypeWriter
                        options={{
                            strings: ['Security', 'Machine Learning'],
                            autoStart: true,
                            loop: true,
                        }} /></span>Engineer</h3>
                </div>
                <a href="#portfolio">
                    <ArrowDownward className="img" />
                </a>
            </div>
        </div>
    );
}

