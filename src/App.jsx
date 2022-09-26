import React, { useState } from "react";
import "./App.css";
import GradingSclae from "../src/components/GradingSclae";
import { Button, Modal } from "react-bootstrap";
import GradeScale2 from "./components/GradeScale2";
function App() {
  const data = [
    { sub: "Enlish", Fa: 10, O1: 10, Sa: 50, O2: 23, Total: 93 },
    { sub: "Hindi", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Sanskrit", Fa: 19, O1: 9, Sa: 40, O2: 8, Total: 76 },
    { sub: "Math", Fa: 14, O1: 5, Sa: 58, O2: 7, Total: 84 },
    { sub: "EVS", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Social study", Fa: 13, O1: 3, Sa: 33, O2: 8, Total: 57 },
    { sub: "Computer", Fa: 17, O1: 10, Sa: 60, O2: 10, Total: 97 },
    { sub: "Moral", Fa: 15, O1: 10, Sa: 55, O2: 10, Total: 90 },
    { sub: "Gk", Fa: 19, O1: 10, Sa: 60, O2: 10, Total: 89 },
    { sub: "Conversation", Fa: 17, O1: 10, Sa: 57, O2: 10, Total: 94 },

    { sub: "Drawing", Fa: "", O1: "", Sa: null, O2: null, Total: "A" },
  ];
  // const [marks, setMarks] = useState({
  //   English: {},
  //   Hin: {},
  //   San: {},
  //   Mat: {},
  //   Evs: {},
  //   Soc: {},
  //   Com: {},
  //   Mor: {},
  //   Gk: {},
  //   Con: {},
  //   Draw: {},
  // });
  const [English,setEnglish]=useState({FA:"",SA:"",O1:"",O2:""})
  const handleChange = (e) => {
    const {id,value}=e.target //id-->name here
    if(e.target.id=="English"){
      setEnglish(
        {...English,[id]:'2'}
      )
    }
    console.log(English,id,value)
  };
  const grade = [
    // {key:"",val:"Grade"},
    { key: "Development & Maturity", val: "A" },
    { key: "Responsibility", val: "A" },
    { key: "Self Confidence", val: "A" },
    { key: "Participation in Group Work", val: "A" },
    { key: "Neatness", val: "A+" },
    { key: "Music", val: "A" },
    { key: "Discipline", val: "A" },
    { key: "Hard work", val: "A" },
    { key: "Attitude towards HM", val: "A" },
    { key: "Craft", val: "A" },
    { key: "Regularity & Punctuality", val: "A" },
  ];
  const [popup, setPopup] = useState(false);
  const handleModal = () => {
    if (popup) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };

  return (
    <>
      <div className=" parent-div border-top border-bottom  border-end border-start border-dark p-0">
        <h3 className="text-center  p1  red border-bottom border-dark m-0">
          First Terminal Examination 2022-23
        </h3>
        <h6 className="text-center p1  border-bottom border-dark m-0">
          ACADEMIC PERFORMANCE
        </h6>

        <div className="aca-div container">
          <div className="row border-dark main-div-sc-cosc border-bottom">
            <div className=" part-1 col-lg-7 col-sm-12 border-end border-dark">
              <div className=" text-center text-center text-primary font-weight-bold ">
                Part-I Scholastic Areas
              </div>

              <div className="text-center justify-content-center  row">
                <div className="col-1 border-end border-top border-dark">
                  <div className="row">SL no</div>
                  <div className="row"></div>
                </div>
                <div className="col-5 border-end border-top border-dark d-flex justify-content-center align-items-center">
                  SUBJECTS
                </div>
                <div className="col-1 border-end border-top border-dark text-center">
                  <div className="row d-flex border-bottom border-dark justify-content-center">
                    FA
                  </div>
                  <div className="row d-flex justify-content-center">20</div>
                </div>
                <div className="col-1 border-end border-top border-dark ">
                  <div className="row d-flex justify-content-center border-bottom border-dark">
                    Oral
                  </div>
                  <div className="row d-flex justify-content-center">10</div>
                </div>
                <div className="col-1 border-end border-top border-dark ">
                  <div className="row d-flex justify-content-center border-bottom border-dark">
                    SA
                  </div>
                  <div className="row d-flex justify-content-center">60</div>
                </div>
                <div className="col-1 border-end border-top border-dark ">
                  <div className="row d-flex justify-content-center border-bottom border-dark">
                    Oral
                  </div>
                  <div className="row d-flex justify-content-center">10</div>
                </div>
                <div className="col-2  border-top border-dark  ">
                  <div className="row d-flex justify-content-center border-bottom border-dark">
                    TOTAL
                  </div>
                  <div className="row d-flex justify-content-center">100</div>
                </div>
              </div>
              {data.map((elem, i) => {
                return (
                  <>
                    <div className="row text-center" key={i}>
                      <div className="col-1 border-top border-end border-dark">
                        {i + 1}
                      </div>
                      <div
                        className="col-5 border-top border-end border-dark d-flex justify-content-left"
                        style={{ textAlign: "left" }}
                      >
                        {elem.sub}
                      </div>
                      <div className="col-1 border-top border-end border-dark d-flex justify-content-center">
                        {elem.Fa}
                      </div>
                      <div className="col-1 border-top border-end border-dark d-flex justify-content-center">
                        {elem.O1}
                      </div>
                      <div className="col-1 border-top border-end border-dark d-flex justify-content-center">
                        {elem.Sa}
                      </div>
                      <div className="col-1 border-top border-end border-dark d-flex justify-content-center">
                        {elem.O2}
                      </div>
                      <div className="col-2 border-top border-dark d-flex justify-content-center">
                        {elem.Total}
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="row border-dark border-top">
                <div className="col-6 border-end border-dark">GRAND TOTAL</div>
                <div className="col-6 " style={{ textAlign: "right" }}>
                  {840}
                </div>
              </div>
              <div className="row border-dark border-top  ">
                <div className="col-6 border-end border-dark">PERCENTAGE</div>
                <div className="col-6 " style={{ textAlign: "right" }}>
                  {93.34}
                </div>
              </div>
              <div className="row border-dark border-top ">
                <div className="col-6 border-end border-dark">RANK</div>
                <div className="col-6 " style={{ textAlign: "right" }}>
                  V
                </div>
              </div>
            </div>

            {/* part2 start */}
            <div className="container d-flex flex-column justify-content-between  part2main col-lg-5 col-sm-12">
              <div className="d-flex justify-content-center align-items-center text-center text-primary font-weight-bold row border-bottom border-dark">
                Part-II Co-Scholastic Areas
              </div>

              <div className="d-flex justify-content-end align-items-center row  border-dark">
                <div
                  className=" col-lg-3 border-start border-dark d-flex justify-content-center  text-center"
                  // style={{ height: "50px" }}
                >
                  Grade
                </div>
              </div>
              {grade.map((elem,i) => {
                return (
                  <>
                    <div
                      className="d-flex grid-grade align-items-center row border-top border-dark "
                      
                      style={{ height: "auto" ,marginTop:""}}
                      key={i}
                    >
                      <div
                        className="col-9 border-dark border-end col-sx-9"
                        // style={{ height: "34px" }}
                      >
                        {elem.key}
                      </div>
                      <div
                        className=" col-3 text-center  col-sx-3"
                        // style={{ height: "34px" }}
                      >
                        {elem.val}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* part3 start */}

        <div className="container m-0  part3">
          <h5 className="text-center">Part-III : Attendance </h5>
          <div className=" m-auto border-dark row border container d-flex justify-content-center ">
            <div className="col-lg-2 col-sm-6 border-end border-dark">
              <div className="row"></div>
              <div className="row d-flex justify-lg-content-center ps-2">
                Term-1
              </div>
            </div>
            <div className="col-lg-4  col-sm-6 border-end border-dark ">
              <div className="row d-flex justify-content-lg-center ps-2">
                No Of Working Days
              </div>
              <div className="row d-flex justify-content-lg-center ps-2">
                89
              </div>
            </div>
            <div className="col-lg-4  col-sm-6 border-end border-dark">
              <div className="row d-flex justify-content-lg-center ps-2">
                No. Of Days Present
              </div>
              <div className="row d-flex justify-content-lg-center ps-2">
                89
              </div>
            </div>
            <div className="col-lg-2  col-sm-6 ">
              <div className="row d-flex justify-content-lg-center ps-2">
                Percentage
              </div>
              <div className="row d-flex justify-content-lg-center ps-2">
                100
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between ps-1 pe-1">
            <div>C.G.P.A : {9.6}</div>
            <div>Grade : {"A"}</div>
          </div>
          <div className="remark mb-5 ps-1 pe-1">
            Teacher's Remark : <span className="fw-bold"> {"Excellent"}</span>
          </div>
          <div className="d-flex justify-content-between ps-1 pe-1">
            <div>Teachers Signeture</div>
            <div>Parent's Signature</div>
            <div>Pricpal's Signature</div>
          </div>
          <div className="row part4 p-0 m-0 ">
            <h4 className=" text-center part4 f-cap m-0 p-0">
              GRADING <span style={{ fontSize: "150%" }}>S</span>CALE
            </h4>
          </div>
        </div>

        <div className="row border-end border-start border-dark p-0 m-0  ">
          {/* <GradingSclae  /> */}
        </div>
        <div className=" col-6 m-auto">
          <GradeScale2 />
        </div>
        <div className="row text-center justify-center d-flex part4 border-bottom border-top border-dark   p-0 m-0 ">
          <h4 className="part4">
            <i> Our Parents Are Seen God On The Earth</i>
          </h4>
        </div>
        <div
          className="row m-0 p-0 flex-row d-flex justify-content-between"
          style={{}}
        >
          <Modal show={popup} onHide={handleModal}>
            <Modal.Header closeButton>Fill In Your Mark</Modal.Header>

            <Modal.Body>
              <div className="container">
                {data.map((elem,i) => {
                  return (
                    <>
                      <div className="row m-auto d-flex justify-content-around" key={i}>
                        <h6>{elem.sub}</h6>
                        <input
                          className="col-2 "
                          placeholder="FA"
                          type="text"
                          pattern="\d*"
                          maxlength="2"
                          name={elem.sub}
                          
        
                          id="FA"
                          onChange={(e)=>{handleChange(e)}}
                          
                          
                        />
                        <input
                          type="number"
                          className="col-2 "
                          placeholder="Oral"
                        />
                        <input
                          type="number"
                          className="col-2 "
                          placeholder="SA"
                        />
                        <input
                          type="number"
                          className="col-2 "
                          placeholder="Oral"
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
//       <Button
//         type="button"
//         class="btn btn-success p-2 "
//         style={{ width: "5%", height: "1%" }}
//         onClick={handleModal}
//       >
//         ADD
//       </Button>
    </>
  );
}

export default App;
