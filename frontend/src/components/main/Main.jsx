import React, { useEffect, useState } from "react";
import axios from "axios";
import { Commits } from "../commits/Commits";
import { General } from "../general/General";

import "./Main.css";

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCommit = async () => {
      const url = "http://localhost:4000/api/commits";

      try {
        const { data } = await axios.get(url);

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCommit();
  }, []);

  return (
    <div className="bg">
      {/* <General />
      <hr /> */}
      <Commits data={data} />
    </div>
  );
};
