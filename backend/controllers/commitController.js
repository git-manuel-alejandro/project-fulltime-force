import axios from "axios";

const commitController = async (req, res) => {
  const url =
    "https://api.github.com/repos/git-manuel-alejandro/project-fulltime-force/commits";

  const { data } = await axios.get(url);
  res.json(data[0].commit);
};

export { commitController };
