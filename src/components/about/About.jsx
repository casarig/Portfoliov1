import "./about.css";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am a person who knows what he likes and who loves his profession, I like to train myself,
                    learning new content, it's a lot of fun.
                </p>
                <p className="a-desc">
                    At the same time, I consider myself a responsible, honest, organized person with
                    working times.
                </p>
                <div className="a-award">
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Learning...</h4>
                        <p className="a-award-desc">
                            Currently I am training in Angular framework and Typescript,
                            and I continue to train at the same time in React and Javascript.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;