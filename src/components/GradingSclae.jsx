import React from "react";

function GradingSclae() {
  return (
    <>
      <table class="table m-auto  border-dark border table-bordered" style={{fontSize:"8px",width:"30%"}} >
        <thead className="text-center">
          <tr>
            <th scope="col">MARKS RANGE</th>
            <th scope="col">GRADES</th>
            <th scope="col">REMARKS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">91-100</td>
            <td className="text-center">A1</td>
            <td >Excellent</td>
          </tr>
          <tr>
            <td className="text-center">81-90</td>
            <td className="text-center">A2</td>
            <td>Very Good</td>
          </tr>
          <tr>
            <td className="text-center">71-80</td>
            <td className="text-center">B1</td>
            <td >Good</td>
          </tr>
          <tr>
            <td className="text-center">61-70</td>
            <td className="text-center">B2</td>
            <td >satisfactory</td>
          </tr>
          <tr>
            <td className="text-center">51-60</td> 
            <td className="text-center">C1</td>
            <td >Satisfactory</td>
          </tr>
          <tr>
            <td className="text-center">40-60</td>
            <td className="text-center">C2</td>
            <td >Unsatisfactory</td>
          </tr>
          <tr>
            <td className="text-center">Below 40</td>
            <td className="text-center">D</td>
            <td >Fail | Poor</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default GradingSclae;
