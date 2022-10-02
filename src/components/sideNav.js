import { useEffect } from "react";
const Sidenav = () => {
  useEffect(async () => {
    const pNo = sessionStorage.getItem("pNo");
    const rawres = await fetch("http://localhost:5000/doctor/" + pNo);
    const res = await rawres.json();
    res.session.map((session, i) => {
      fetch(`http://localhost:5000/${session.patient_id}/${session_id}`)
        .then((res) => res.json())
        .then((res) => {
          const arr = [];
          arr.push(res);
          const sessionJson = JSON.stringify(arr);
          sessionStorage.setItem("sessions", sessionJson);
        });
    });
  });

  return (
    <div className="side-nav">
      <ul>
        <li>Session 1</li>
        <li>Session 2</li>
        <li>Session 3</li>
      </ul>
    </div>
  );
};

export default Sidenav;
