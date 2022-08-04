import { useState } from "react";
import { Container } from "react-bootstrap";
// import { CloseButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Components/ModalLanguage.css";

function MyVerticallyCenteredModal(props) {
  const { addLanguage, selectedLanguage, setModalShow, setlanguageHere } =
    props;

  const [languageProficiency, setLanguageProficiency] = useState();

  const addhandler = () => {
    addLanguage(languageProficiency);
    setModalShow(false);
    // setlanguageHere("");
    setLanguageProficiency("");
  };
  const closehandler = () => {
    setModalShow(false);
    setlanguageHere("");
    setLanguageProficiency("");
  };

  // const closeButton = () => {};

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="fullModal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="Head-Title">
          <div className="LangModalTitle">
            Please Choose your language <br />
            Proficiency for {props.selectedLanguage}
            <div></div>
            <button onClick={closehandler}>X</button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button
          onClick={() => setLanguageProficiency("Native")}
          style={{ marginBottom: "13px", borderRadius: "30px" }}
        >
          Native
          {languageProficiency === "Native" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          onClick={() => setLanguageProficiency("Proficient")}
          style={{ marginBottom: "13px", borderRadius: "30px" }}
        >
          Proficient
          {languageProficiency === "Proficient" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          onClick={() => setLanguageProficiency("Fluent")}
          style={{ marginBottom: "13px", borderRadius: "30px" }}
        >
          Fluent
          {languageProficiency === "Fluent" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          onClick={() => setLanguageProficiency("Intermediate")}
          style={{ marginBottom: "13px", borderRadius: "30px" }}
        >
          Intermediate
          {languageProficiency === "Intermediate" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
        <button
          onClick={() => setLanguageProficiency("Basic")}
          style={{ marginBottom: "13px", borderRadius: "30px" }}
        >
          Basic
          {languageProficiency === "Basic" && (
            <i
              class="fa fa-check"
              style={{ fontSize: "18px", color: "#015201", marginLeft: "5px" }}
            ></i>
          )}
        </button>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={!languageProficiency}
          className="w-100"
          onClick={addhandler}
        >
          Add Language
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
