import React from "react";

export const Commits = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((commit) => {
          return <li key={commit.node_id}>{commit.commit.message}</li>;
        })}
      </ul>
    </>
  );
};
