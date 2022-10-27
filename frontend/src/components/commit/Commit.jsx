import React from "react";
import "./Commit.css";

export const Commit = ({ commit }) => {
  console.log(commit);
  return (
    <>
      <div className="p-2 commit-detail">
        <p className="text-white commit-title">{commit.commit.message}</p>
        <p className="text-white commit-author">
          {commit.commit.committer.name}{" "}
          <span className="font-light text-xs">
            {commit.commit.committer.date.slice(0, 10)}
          </span>
        </p>
      </div>
    </>
  );
};
