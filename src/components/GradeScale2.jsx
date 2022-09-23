import React from "react";

function GradeScale2() {
  const grade = [
    { m: "91-100", g: "A1", r: "Excellent" },
    { m: "81-90", g: "A2", r: "Very Good" },
    { m: "71-80", g: "B1", r: "Good" },
    { m: "61-70", g: "B2", r: "Satisfactory" },
    { m: "51-60", g: "C1", r: "Satisfactory" },
    { m: "40-50", g: "C2", r: "Unsatisfactory" },
    { m: "Below 40", g: "D", r: "Fail | Poor" },
  ];
  return (
    <>
      <div className="main-gradescale ">
        <div className="row border-top g-outer border-dark" style={{ fontSize: "6px" }}>
          <div className="col-4 border-dark border-end border-start">MARKS RANGE</div>
          <div className="col-4 border-dark border-end">GRADES</div>
          <div className="col-4 border-dark border-end">REMARKS</div>
        </div>
        {grade.map((e,i) => {
          return (
            <>
              <div className=" g-inner row grade-text border-dark border-top border-start border-end" style={{ fontSize: "6px" }} key={i}>
                <div className="col-4 border-dark border-end ">{e.m}</div>
                <div className="col-4 border-dark border-end ">{e.g}</div>
                <div className="col-4">{e.r}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default GradeScale2;
