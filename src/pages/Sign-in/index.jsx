import "./Signin.scss";
import { Row, Col } from "antd";
import FormSignin from "./Components/FormSignin";
import FormInfo from "./Components/FormInfo";
import { Link } from "react-router-dom";

const Signin = () => {
  // Customer feedback data
  const data = [
    {
      title: "Timson K",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
      content:
        "Simply unbelievable i am readlly satisfied width my projects and business. This is Absolutely wonderful!",
      job: "Freelancer",
    },
  ];
  // Data skills
  const skills = ["PHP", "ReactJs", "Wordpress"];

  return (
    <div id="signin" className="signin">
      <Row gutter={0}>
        <Col sm={24} xs={24} md={10} className="text_info_comany">
          <div className="signin_wrapper-left signin-left">
            <FormInfo data={data} />
          </div>
        </Col>
        <Col sm={24} xs={24} md={14} className="from_wrapper">
          <div className="from_container">
            <div className="title">
              <h3>Sign in</h3>
            </div>
            <div className="desc">
              <p>Have an account?<Link to={'/'}  className="register">Register</Link></p>
            </div>

            <FormSignin skills={skills} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Signin;
