import "./App.css";
import GradingSclae from "../src/components/GradingSclae"
function App() {
  const data = [
    { sub: "Enlish", Fa: 10, O1: 10, Sa: 50, O2: 23, Total: 80 },
    { sub: "Hindi", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Sanskrit", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Math", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "EVS", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Social study", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Computer", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Moral", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Gk", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Conversation", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Conversation", Fa: 10, O1: 10, Sa: 50, O2: 10, Total: 80 },
    { sub: "Drawing", Fa: "", O1: "", Sa: null, O2: null, Total: "A" },
  ];
  const grade = [
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
  return (
    <>
      <div className=" parent-div border border-dark p-0">
        <h3 className="text-center red border-bottom border-dark m-0">
          First Terminal Examination 2022-23
        </h3>
        <h6 className="text-center border-bottom border-dark m-0">
          ACADEMIC PERFORMANCE
        </h6>

        <div className="aca-div container">
          <div className="row border-dark border-bottom">
            <div className=" part-1 col-7 border-end border-dark">
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
                  <div className="row d-flex justify-content-center">70</div>
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
                    <div className="row text-center">
                      <div className="col-1 border-top border-end border-dark">
                        {i + 1}
                      </div>
                      <div
                        className="col-5 border-top border-end border-dark"
                        style={{ textAlign: "left" }}
                      >
                        {elem.sub}
                      </div>
                      <div className="col-1 border-top border-end border-dark">
                        {elem.Fa}
                      </div>
                      <div className="col-1 border-top border-end border-dark">
                        {elem.O1}
                      </div>
                      <div className="col-1 border-top border-end border-dark">
                        {elem.Sa}
                      </div>
                      <div className="col-1 border-top border-end border-dark">
                        {elem.O2}
                      </div>
                      <div className="col-2 border-top border-dark">
                        {elem.Total}
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="row border-dark border-top">
                <div className="col-6 border-end border-dark">GRAND TOTAL</div>
                <div className="col-6 " style={{ textAlign: "right" }}>
                  400
                </div>
              </div>
              <div className="row border-dark border-top  ">
                <div className="col-6 border-end border-dark">PERCENTAGE</div>
                <div className="col-6 " style={{ textAlign: "right" }}>
                  86
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
            <div className="container part2main col-5">
              <div className="d-flex justify-content-center align-items-centertext-center text-primary font-weight-bold row border-bottom border-dark">
                Part-II Co-Scholastic Areas
              </div>

              <div className="d-flex justify-content-end align-items-center row">
                <div
                  className=" col-2 border-start border-dark d-flex justify-content-center align-items-center text-center"
                  // style={{ height: "50px" }}
                >
                  Grade
                </div>
              </div>
              {grade.map((elem) => {
                return (
                  <>
                    <div className="d-flex justify-content-end align-items-center row" style={{height:"auto"}}>
                      <div
                        className="col-10 border-dark border-top border-end"
                        // style={{ height: "34px" }}
                      >
                        {elem.key}
                      </div>
                      <div
                        className=" col-2 text-center border-dark border-top"
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

        <div className="container   part3">

          <h5 className="text-center">Part-III : Attendance </h5>
          <div className="m-2 m-auto border-dark border container">
            <div className="row ">
              <div className="col-2  border-end border-dark"></div>
              <div className="col-4  border-end border-dark">No. of Working Days</div>
              <div className="col-4  border-end border-dark">No. of Days Present</div>
              <div className="col-2 ">Percentage</div>
            </div>
            <div className="row ">
            <div className="col-2  border-dark border-top border-end text-center">Term-1</div>
              <div className="col-4  border-dark border-top border-end text-center">83</div>
              <div className="col-4 border-dark border-top border-end text-center">83</div>
              <div className="col-2 border-dark border-top text-center">100</div>
            </div>

          </div>
          <div className="d-flex justify-content-between">
            <div>C.G.P.A : {9.6}</div>
            <div>Grade : {"A"}</div>
          </div>
          <div className="remark mb-5">
            Teacher's Remark : <span className="fw-bold"> {"Excellent"}</span>
          </div>
          <div className="d-flex justify-content-between">
            <div>Teachers Signeture</div>
            <div>Parent's Signature</div>
            <div>Pricpal's Signature</div>
          </div>
        </div>
        <h4 className="text-center f-cap m-2">GRADING <span style={{fontSize:"150%"}}>S</span>CALE</h4>
        <div className="row m-auto" style={{width:"45%"}}>
        <GradingSclae />
        </div>
      </div>
    </>
  );
}

export default App;
