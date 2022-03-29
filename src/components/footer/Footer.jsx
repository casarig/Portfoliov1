import "./footer.css";
import { FacebookFilled, InstagramFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";

function footer() {
    return (
        <div className="footer">
            <div className="footer-sns">
                <div className="desing-by">
                    Todos los derechos reservados © 2022 Diseñador By GabrieleC.
                </div>
                <div className="sns-links">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <FacebookFilled style={{ fontSize: "30px", color: "blue" }} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <InstagramFilled style={{ fontSize: "30px", color: "light blue" }} />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <YoutubeFilled style={{ fontSize: "30px", color: "red" }} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <TwitterSquareFilled style={{ fontSize: "30px", color: "red" }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default footer;