import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PopUp from "../../components/PopUp/PopUp";
import classes from "./ProjectDetails.module.css";

const ProjectList = () => {
  const token = localStorage.getItem("jwt");
  const [ProjectList, setProjectList] = useState([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8200/projects", {
        headers: {
          // 'Host': '<calculated when request is sent>',
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProjectList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ProjectList]);
  return (
    <div class="card">
      <table className={classes.empTable}>
        <caption>Project Details</caption>
        <tr>
          <th>Project ID</th>
          <th>Deadline Date</th>
          <th>Project Owner</th>
          <th>Project Status</th>
          <th>Starting Date</th>
          <th>Team Count </th>
        </tr>
        {ProjectList?.map((emp, key) => {
          return (
            <>
              <tr
                id={key}
                className={classes.empRow}
                onClick={() => {
                  setTrigger(true);
                }}
              >
                
                <td>{emp.projectId}</td>
                <td>{emp.deadLineDate}</td>
                <td>{emp.projectOwner}</td>
                <td>{emp.projectStatus}</td>
                <td>{emp.startingDate}</td>
                <td>{emp.teamMembersCount}</td>
              </tr>

              <PopUp trigger={trigger} setButtonPopup={setTrigger}>
                <h1>Hello</h1>
              </PopUp>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default ProjectList;
