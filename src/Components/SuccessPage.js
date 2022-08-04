import "./FormValidation.css";
import "./FormValidation";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  let navigate = useNavigate();
  const goToHomehandler = () => {
    navigate("/");
  };
  return (
    <div className="successPage">
      <p>✔</p>
      <h4>
        Thank you for Submitting our info
        <br />
        We'll connect you soon.
      </h4>
      <button className="w-50 m-auto success-btn" onClick={goToHomehandler}>
        Go to home page
      </button>
    </div>
  );
};
export default SuccessPage;
