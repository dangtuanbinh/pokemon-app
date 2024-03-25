import "./styles.scss";
import logo from "../../assets/logo.png";

const classNamePrefix = "logo";

const Logo = () => {
  return (
    <div className={`${classNamePrefix} col-12`}>
      <div className={`${classNamePrefix}__container col-8 mx-auto d-flex flex-direction-row justify-content-center`}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Logo;
