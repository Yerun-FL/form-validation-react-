import { Container, Button } from "react-bootstrap";
import "./FormValidation.css";
import MyVerticallyCenteredModal from "./ModalLanguage";
import { BiCurrentLocation } from "react-icons/bi";
import { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import "./FormValidation.css";
// import Combine from "./Combine";
// import SuccessPage from "./SuccessPage";
import { useNavigate } from "react-router-dom";

const FormValidation = () => {
  const [proficiency, setProficiency] = useState("");
  const yesNoRef = useRef();
  const orgnameRef = useRef();
  const reqNameRef = useRef();
  const firstNameRef = useRef();
  const secondNameRef = useRef();
  const thirdNameRef = useRef();
  const fourthNameRef = useRef();
  const fifthNameRef = useRef();
  const sixthNameRef = useRef();
  const seventhnameRef = useRef();
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const [crossButton, setCrossButton] = useState(true);
  const [yesNo, setYesNo] = useState({
    value: undefined,
    isValid: true,
  });

  // console.log({ yesNo });

  const [organisation, setOrganisation] = useState({
    value: "",
    isValid: true,
  });
  const [requester, setRequester] = useState({
    value: "",
    isValid: true,
  });
  const [firstname, setFirstName] = useState({
    value: "",
    isValid: true,
  });
  const [lastName, setLastName] = useState({
    value: "",
    isValid: true,
  });
  const [email, setEmail] = useState({
    value: "",
    isValid: true,
  });
  const [phone, setPhone] = useState({
    value: "",
    isValid: true,
  });
  const [location, setLocation] = useState({
    value: "",
    isValid: true,
  });
  const [states, setStates] = useState({
    value: undefined,
    isValid: true,
  });
  const [city, setCity] = useState({
    value: "",
    isValid: true,
  });
  const [language, setlanguage] = useState({
    value: "",
    isValid: true,
  });
  // const [skill, setSkill] = useState({
  //   value: undefined,
  //   isValid: true,
  // });
  const [mobility, setMobility] = useState("");
  const [visable, setVisable] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const [valid, setvalid] = useState(true);
  const [statesOption, setStatesOption] = useState([]);
  const [cityOption, setCityOptions] = useState([]);
  const [languageAndproficiency, setLanguageAndproficiency] = useState([]);
  const [resumeUpload, setResumeUpload] = useState("");
  const [checkMe, setCheckMe] = useState(false);
  const [checkmeValidation, setCheckeValidation] = useState(true);
  const [selectedSkillValidation, setSelectedSkillValidation] = useState(false);

  const resumehandler = (e) => {
    setResumeUpload(e.target.value);
  };

  let navigate = useNavigate();

  const stateSelect = [
    { id: "1", name: "Andra pradesh" },
    { id: "2", name: "Telangana" },
    { id: "3", name: "Maharashtra" },
  ];

  const citySelect = [
    { id: "1", stateId: "1", name: "Visakhaptnam" },
    { id: "2", stateId: "1", name: "Vijayawada" },
    { id: "3", stateId: "1", name: "Tirupati" },
    { id: "4", stateId: "1", name: "Kadapa" },
    { id: "5", stateId: "1", name: "Nellore" },

    { id: "6", stateId: "2", name: "Hyderabad" },
    { id: "7", stateId: "2", name: "Warangal" },
    { id: "8", stateId: "2", name: "Nalgonda" },
    { id: "9", stateId: "2", name: "Suryapet" },
    { id: "10", stateId: "2", name: "karimnagar" },

    { id: "11", stateId: "3", name: "Mumbai" },
    { id: "12", stateId: "3", name: "Pune" },
    { id: "13", stateId: "3", name: "Nagpur" },
    { id: "14", stateId: "3", name: "Dhule" },
    { id: "15", stateId: "3", name: "Nellore" },
  ];

  useEffect(() => {
    setStatesOption(stateSelect);
  }, []);

  const stateHandler = (id) => {
    const stateHere = citySelect.filter((e) => e.stateId === id);
    setCityOptions(stateHere);
  };

  console.log(city);
  // ...................Sumbit buton..................
  const submitHandler = (e) => {
    setDisplaySpinner(false);
    e.preventDefault();

    if (yesNo.value === undefined) {
      setYesNo((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (visable && organisation.value === "") {
      setOrganisation((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (visable && requester.value === "") {
      setRequester((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (firstname.value === "") {
      setFirstName((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (skill.length === 0) {
      setSelectedSkillValidation(true);
    }
    if (lastName.value === "") {
      setLastName((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (email.value === "") {
      setEmail((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (phone.value === "") {
      setPhone((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (location.value === "") {
      setLocation((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (states.value === undefined) {
      setStates((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (!city.value) {
      setCity((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (languageAndproficiency.length === 0) {
      setlanguage((prevState) => {
        return { ...prevState, isValid: false };
      });
    }
    if (!checkMe) {
      setCheckeValidation(false);
    }

    if (yesNo.value === undefined || !yesNo.isValid) {
      setTimeout(() => {
        return alert(
          `please let us know,are you applying on behalf of someone else`
        );
      }, 400);
      yesNoRef.current.focus().scrollIntoView();
      // setYesNo(false);
      // alert(`please let us know,are you applying on behalf of someone else`);
    } else if (
      visable &&
      (!organisation.isValid || organisation.value === "")
    ) {
      console.log(organisation.value);
      let errorMsg = "organisation name field is empty";
      if (organisation.value !== "") {
        errorMsg = "enter valid organisation name";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 400);
      orgnameRef.current.focus().scrollIntoView();
      // alert("enter organisation");
    } else if (visable && (!requester.isValid || requester.value === "")) {
      let errorMsg = "enter valid requester name  ";
      if (requester.value === "") {
        errorMsg = "requester name field is empty";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 400);
      reqNameRef.current.focus().scrollIntoView();
    } else if (firstname.value === "" || !firstname.isValid) {
      let errorMsg = "enter valid first Name";
      console.log(firstname.value);
      if (firstname.value === "") {
        errorMsg = "First Name field is empty";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 400);
      firstNameRef.current.focus().scrollIntoView();
      setFirstName(false);
    } else if (lastName.value === "" || !lastName.isValid) {
      let errorMsg = "enter valid last Name";
      if (lastName.value === "") {
        errorMsg = "last Name field is empty";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 400);
      secondNameRef.current.focus().scrollIntoView();
      setLastName(false);
    } else if (email.value === "" || !email.isValid) {
      let errorMsg = "enter valid email";
      if (email.value === "") {
        errorMsg = "Email field is empty";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 400);
      thirdNameRef.current.focus().scrollIntoView();
      setEmail(false);
    } else if (phone.value === "" || !phone.isValid) {
      let errorMsg = "enter valid phone Number";
      if (phone.value === "") {
        errorMsg = "Phone Number field is empty";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 400);
      fourthNameRef.current.focus().scrollIntoView();
      setPhone(false);
    } else if (location.value === "" || !location.isValid) {
      let errorMsg = "enter valid location";
      if (location.value === "") {
        errorMsg = "location field is empty";
      }
      setTimeout(() => {
        return alert(errorMsg);
      }, 400);
      fifthNameRef.current.focus().scrollIntoView();
      setLocation(false);
    } else if (states.value === undefined || !states.isValid) {
      setStates((prevState) => {
        return { ...prevState };
      });
      setTimeout(() => {
        return alert(" Select state");
      }, 400);
      sixthNameRef.current.focus().scrollIntoView();
    } else if (!city.value) {
      setCity((prevState) => {
        return { ...prevState };
      });
      setCity(false);
      return alert("Select city");
    } else if (languageAndproficiency.length === 0) {
      return alert("Select language");
    } else if (skill.length === 0) {
      alert("select skill");
    } else if (!checkMe) {
      alert("Are you agree to share the above personal information.");
      setCheckeValidation(false);
    }
    // setCheckeValidation(false);

    // else if (!skill.length) {
    //   setSkill((prevState) => {
    //     return { ...prevState };
    //   });
    //   setSkill(false);
    //   alert("enter skill");
    // }
    // else if (!mobility) {
    //   // setvalid(false);
    //   alert("enter Mobility");
    // }
    else {
      setDisplaySpinner(true);
      setTimeout(() => {
        setvalid(true);
        setDisplaySpinner(false);
        navigate("./SuccessPage");
      }, 4000);
      setDisable(true);
    }
  };

  const languageHandler = () => {
    setModalShow(true);
  };

  const isInputValid = (e, y) => {
    if (y === "organization") {
      const temporganisationValid =
        e.target.value !== "" && /^[a-z-]+$/i.test(e.target.value);
      setOrganisation({
        value: e.target.value,
        isValid: temporganisationValid,
      });
    } else if (y === "requester") {
      const tempRequesterValid =
        e.target.value !== "" && /^[a-z-]+$/i.test(e.target.value);
      setRequester({
        value: e.target.value,
        isValid: tempRequesterValid,
      });
    } else if (y === "firstName") {
      const tempFirstNameValid =
        e.target.value !== "" && /^[a-z-]+$/i.test(e.target.value);
      setFirstName({
        value: e.target.value,
        isValid: tempFirstNameValid,
      });
    } else if (y === "lastName") {
      const tempLastNameValid =
        e.target.value !== "" && /^[a-z-]+$/i.test(e.target.value);

      setLastName({ value: e.target.value, isValid: tempLastNameValid });
    } else if (y === "EmailInput") {
      // setEmail(
      //   e.target.value !== "" &&
      //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(e.target.value)
      // );

      const tempEmailValid =
        e.target.value !== "" &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(e.target.value);

      setEmail({
        value: e.target.value,
        isValid: tempEmailValid,
      });
    } else if (y === "phoneNumberValid") {
      const isPhoneInputValid =
        e.target.value !== "" && /^[0-9]{10}$/i.test(e.target.value);
      setPhone({
        value: e.target.value,
        isValid: isPhoneInputValid,
      });
    } else if (y === "locationVlaid") {
      if (
        e.target.value !== "" &&
        /^[A-Z0-9 _]*[A-Z0-9][A-Z0-9 _]*$/i.test(e.target.value)
      ) {
        setLocation({
          value: e.target.value,
          isValid: true,
        });
      } else {
        setLocation((prevState) => {
          return { ...prevState, isValid: false };
        });
      }
    }
    // else if (y === "statevalid") {
    //   setStates(states.value === undefined);
    // }
  };

  const addLanguage = (selectedProficiency) => {
    if (languageAndproficiency.length > 0) {
      setLanguageAndproficiency((prevState) => {
        return [
          ...prevState,
          { language: language, proficiency: selectedProficiency },
        ];
      });
    } else {
      setLanguageAndproficiency([
        { language: language, proficiency: selectedProficiency },
      ]);
    }
    setProficiency(selectedProficiency);
  };

  const deleteLanguage = (language, proficiency) => {
    console.log(language, proficiency);
    const updatedLanguageAndproficiency = languageAndproficiency.filter(
      (eachLanguage) =>
        eachLanguage.language !== language ||
        eachLanguage.proficiency !== proficiency
    );
    setLanguageAndproficiency(updatedLanguageAndproficiency);
  };

  // const setSkillHandler = setSkill((prevState, e) => {
  //   return { ...prevState, value: e.target.length };
  // });

  // console.log(organisation.isValid);

  const languagesArray = [
    { language: "English", key: "1" },
    { language: "Spanish", key: "2" },
    { language: "French", key: "3" },
    { language: "Chinese", key: "4" },
    { language: "Farsi", key: "5" },
  ];

  // const [checkBoxValidation, setCheckBoxValidation] = useState(true);

  const aggrementHandler = () => {
    // setcheckme(!checkMe);
    setCheckMe(!checkMe);
    setCheckeValidation(true);
  };

  // Skills starts here

  const skillArray = [
    { id: 14134134, skill: "React Js" },
    { id: 14134135, skill: "Node Js" },
    { id: 14134136, skill: "Mongo db" },
    { id: 14134137, skill: "Express Js" },
    { id: 14134138, skill: "Angular Js" },
  ];
  const [skillList, setSkillList] = useState(skillArray);
  const [skill, setSkill] = useState([]);

  const [skillVal, setSkillVal] = useState("");

  const handleSkillChange = (e) => {
    const availabelSkills = skillList.filter(
      (skill) => skill.skill !== e.target.value
    );
    const selectedSkill = skillList.filter(
      (skill) => skill.skill === e.target.value
    );
    setSkillList(availabelSkills);
    setSelectedSkillValidation(false);
    setSkill((prevState) => {
      return [...prevState, { id: selectedSkill[0].id, skill: e.target.value }];
    });
    setSkillVal("");
  };

  const skillRemoveHandler = (id) => {
    const addSkillToArray = skillArray.filter((skill) => skill.id === id);
    setSkillList((prevState) => [...prevState, addSkillToArray[0]]);
    const updatedSkill = skill.filter((skill) => {
      return skill.id !== id;
    });
    updatedSkill && setSkill(updatedSkill);
  };

  return (
    <div className="FormValidation-Body">
      <Container>
        <h5>Please enter your information. </h5>
        <p>
          <span style={{ color: "red" }}>*</span>Required fields
        </p>
        <h5>
          Are you applying on behalf of someone else?
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form
          // className={yesNo.isValid ? "mb-3" : "mb-3 inputerror"}
          value={yesNo}
          onChange={(e) =>
            setYesNo((prevState) => {
              return { ...prevState, value: e.target.value };
            })
          }
        >
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-2">
              <Form.Check
                // value={yesNo}
                inline
                label="Yes"
                name="group1"
                type={type}
                ref={yesNoRef}
                id={`inline-${type}-1`}
                onClick={() => {
                  setVisable(true);
                  setYesNo((prevState) => {
                    return { ...prevState, isValid: true };
                  });
                }}
                className={yesNo.isValid ? "mb-1" : "mb-1 inputerror"}
              />
              <br />
              <Form.Check
                inline
                label="No"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                onClick={() => {
                  setVisable(false);
                  setYesNo((prevState) => {
                    return { ...prevState, isValid: true };
                  });
                }}
                className={yesNo.isValid ? "" : " inputerror"}
              />
            </div>
          ))}
        </Form>
        {visable && (
          <div backdrop="static" keyboard={false}>
            <h5>
              Organisation Name
              <span style={{ color: "red" }}>*</span>
            </h5>
            <Form.Group>
              <Form.Control
                id="inpFiled"
                className={organisation.isValid ? "mb-3" : "mb-3 inputerror"}
                type="text"
                ref={orgnameRef}
                placeholder="Enter Organisation Name"
                onChange={(e) => {
                  isInputValid(e, "organization");
                }}
              />
            </Form.Group>
            <h5>
              Requester Name
              <span style={{ color: "red" }}>*</span>
            </h5>
            <Form.Group
              // className={requester ? "mb-3" : "mb-3 inputerror"}
              className={requester.isValid ? "mb-3" : "mb-3 inputerror"}
            >
              <Form.Control
                type="text"
                placeholder="Enter Requester Name"
                // value={requester}
                ref={reqNameRef}
                onChange={(e) => {
                  isInputValid(e, "requester");
                }}
              />
            </Form.Group>
          </div>
        )}
        <h5>
          First Name
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form.Group
          // className={firstname ? "mb-3" : "mb-3 inputerror"}
          className={firstname.isValid ? "mb-3" : "mb-3 inputerror"}
        >
          <Form.Control
            type="text"
            pattern="^[A-Za-z]+$"
            placeholder="Enter First Name"
            // value={firstname}
            onChange={(e) => {
              isInputValid(e, "firstName");
            }}
            ref={firstNameRef}
          />
        </Form.Group>
        <h5>
          Last Name
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form.Group
          // className={lastName ? "mb-3" : "mb-3 inputerror"}
          className={lastName.isValid ? "mb-3" : "mb-3 inputerror"}
        >
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            // value={lastName}
            onChange={(e) => {
              isInputValid(e, "lastName");
            }}
            ref={secondNameRef}
          />
        </Form.Group>
        <h5>
          Email
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form.Group
          className={email.isValid ? "mb-3" : "mb-3 inputerror"}
          // className={valid ? "mb-3" : "mb-3 inputerror"}
        >
          <Form.Control
            // className="inputerror"
            type="email"
            placeholder="Enter Email"
            // value={email}
            onChange={(e) => {
              isInputValid(e, "EmailInput");
            }}
            ref={thirdNameRef}
          />
        </Form.Group>
        <h5>
          Phone Number
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form.Group
          // className={phone ? "mb-3" : "mb-3 inputerror"}
          className={phone.isValid ? "mb-3" : "mb-3 inputerror"}
        >
          <Form.Control
            type="text"
            placeholder="Enter Phone Number"
            // value={phone}
            onChange={(e) => {
              isInputValid(e, "phoneNumberValid");
            }}
            ref={fourthNameRef}
          />
        </Form.Group>
        <h5>
          Current Location
          <span style={{ color: "red" }}>*</span>
        </h5>
        <div className="icon-Location">
          <div className="icon">
            <BiCurrentLocation />
          </div>
          <Form.Group
            // className={location ? "mb-3 w-100" : "mb-3 w-100 inputerror"}
            className={
              location.isValid ? "mb-3 w-100" : "mb-3 w-100 inputerror"
            }
          >
            <Form.Control
              type="text"
              placeholder="Enter Location"
              // value={location}
              onChange={(e) => isInputValid(e, "locationVlaid")}
              ref={fifthNameRef}
            />
          </Form.Group>
        </div>
        <h5>
          State
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form.Select
          ref={sixthNameRef}
          className={states.isValid ? "mb-3 w-100" : "mb-3 w-100 inputerror"}
          aria-label="Default select example"
          id="stateId"
          // value={states}
          onChange={(e) => {
            setStates((prevState) => {
              return { value: e.target.value.charAt, isValid: true };
            });
            // isInputValid(e, "stateValid");
            stateHandler(e.target.value);
            setCity("");
          }}
        >
          <option value="0" style={{ display: "none" }}>
            {" "}
            Select State
          </option>
          {statesOption && statesOption !== undefined
            ? statesOption.map((st, index) => {
                return (
                  <option key={index} value={st.id}>
                    {st.name}
                  </option>
                );
              })
            : "No city"}
        </Form.Select>
        <h5>
          City
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form.Select
          ref={seventhnameRef}
          className={city.isValid ? "mb-3 w-100" : "mb-3 w-100 inputerror"}
          aria-label="Default select example"
          id="cityId"
          // value={states}
          onChange={(e) => {
            setCity({ value: e.target.value, isValid: true });
            isInputValid(e, "stateValid");
          }}
        >
          <option id="SelectCity" style={{ display: "none" }}>
            Select City
          </option>
          {cityOption && cityOption !== undefined
            ? cityOption.map((st, index) => {
                return (
                  <option
                    selected={st.id === city.value}
                    key={index}
                    value={st.id}
                  >
                    {st.name}
                  </option>
                );
              })
            : "No state"}
        </Form.Select>
        <h5>
          Languages{" "}
          <Form.Text className="text-muted">(Select all that apply)</Form.Text>
          <span style={{ color: "red" }}>*</span>
        </h5>
        <Form.Select
          className={
            languageAndproficiency.length > 0 || language.isValid
              ? "mb-3 w-100"
              : "mb-3 w-100 inputerror"
          }
          aria-label="Default select example"
          value={language}
          onChange={(e) => {
            setlanguage((prevState) => {
              return { ...prevState, value: e.target.length };
            });
            setProficiency();
            setCrossButton(true);
            setlanguage(e.target.value);
            languageHandler();
          }}
        >
          <option style={{ display: "none" }}>Select Languages</option>
          {languagesArray.map((each) => {
            if (
              !languageAndproficiency
                .map((selected) => selected.language)
                .includes(each.language)
            ) {
              return (
                <option value={each.language} id={each.key}>
                  {each.language}
                </option>
              );
            }
          })}
        </Form.Select>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
          selectedLanguage={language}
          addLanguage={addLanguage}
          setlanguageHere={setlanguage}
        />
        <div className="language-container ">
          {languageAndproficiency.length > 0 &&
            languageAndproficiency.map((eachLanguage) => {
              return (
                <p className="sub-Language">
                  {eachLanguage.language}({eachLanguage.proficiency}){" "}
                  <button
                    className="cross-btn"
                    onClick={() =>
                      deleteLanguage(
                        eachLanguage.language,
                        eachLanguage.proficiency,
                        setlanguage("")
                      )
                    }
                  >
                    ❌
                  </button>
                </p>
              );
            })}
        </div>
        <h5>
          Skills{" "}
          <Form.Text className=" text-muted">(Select all that apply)</Form.Text>
          <span style={{ color: "red" }}>*</span>
        </h5>

        <Form.Select
          className={
            !selectedSkillValidation ? "mb-3 w-100" : "mb-3 w-100 inputerror"
          }
          onChange={handleSkillChange}
          value={skillVal}
        >
          <option style={{ display: "none" }}>Select Skill</option>
          {skillList?.map((skill) => (
            <option key={skill.id}>{skill.skill}</option>
          ))}
        </Form.Select>
        <div style={{ display: "flex", gap: "8px" }}>
          {skill.map((skill) => (
            <div
              style={{
                backgroundColor: "rgba(2, 102, 163, 0.719)",
                padding: "2px",
                fontSize: "13px",
                width: "auto",
                borderRadius: "20px",
                textAlign: "center",
                fontWeight: "500",
                color: "#011f35",
                alignItems: "center",
                gap: "15px",
                padding: "4px",
                marginBottom: "15px",
              }}
            >
              {skill.skill}{" "}
              <button
                style={{
                  backgroundColor: "transparent",
                  padding: "2px",
                  fontSize: "13px",
                  width: "auto",
                  border: "none",
                  borderRadius: "20px",
                  textAlign: "center",
                  fontWeight: "500",
                  color: "#011f35",
                  alignItems: "center",
                }}
                onClick={() => skillRemoveHandler(skill.id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
        <h5>
          Mobility
          <br />
          <Form.Text className="text-muted">
            Do you have access to reliable transportation
          </Form.Text>
        </h5>
        <Form.Select
          aria-label="Default select example"
          value={mobility}
          onChange={(e) => {
            setMobility(e.target.value);
          }}
        >
          <option style={{ display: "none" }}>Select Mobility</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Form.Select>

        <div
          className="resumeInput"
          style={{
            marginTop: "40px",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5>Resume Upload(*.pdf , *.doc)</h5>
          <input
            onChange={(e) => resumehandler(e)}
            type="file"
            id="files"
            accept=".pdf,.doc"
            style={{ display: "none" }}
          />

          <label
            for="files"
            className="resumeLable"
            style={{
              padding: "6px",
              borderRadius: "6px",
              backgroundColor: "white",
              outline: "#023364 solid 2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#023364",
            }}
          >
            Upload File
          </label>
        </div>
        {/* </div> */}
        {resumeUpload && (
          <div style={{ display: "flex" }}>
            <div className="form-control mt-3">
              {resumeUpload?.split("\\").splice(-1)[0]}
            </div>
            <span>
              <button
                className="mt-3 File-upload"
                onClick={() => setResumeUpload("")}
              >
                X
              </button>
            </span>
          </div>
        )}

        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={aggrementHandler}
            type="checkbox"
            value={checkMe}
            className={
              checkmeValidation ? "mb-3 w-100" : "mb-3 w-100 inputerror"
            }
            label="I agree to share the above personal information in compilance with the data and privacy policy."
          />
        </Form.Group>

        {displaySpinner && (
          <div className="loader center">
            <i className="fa fa-spinner fa-spin" />
          </div>
        )}

        <div className="btn-submit">
          <Button
            disabled={disable}
            className="mt-3 md-10 w-100 btn_hide"
            style={{ backgroundColor: " #014271" }}
            onClick={submitHandler}
          >
            Submit Profile
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default FormValidation;
