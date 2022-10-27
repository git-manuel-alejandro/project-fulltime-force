import { Commit } from "../commit/Commit";
import "./Commit.css";

export const Commits = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className="container">
        <h1 className="text-4xl text-white text-center">Commits Realizados</h1>

        <a
          href="https://github.com/git-manuel-alejandro/project-fulltime-force"
          className="text-white anchor"
          target="_blank"
        >
          Proyecto en Github
        </a>

        <div className="border-color mt-3 content">
          {data.length ? (
            data.map((commit) => {
              return <Commit commit={commit} key={commit.node_id} />;
            })
          ) : (
            <p className="mt-5 text-center text-white uppercase p-5">
              Cargando...
            </p>
          )}
        </div>
      </div>
    </>
  );
};
