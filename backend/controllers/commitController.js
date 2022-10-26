import axios from "axios";

const commitController = async (req, res) => {
  const url =
    "https://api.github.com/repos/git-manuel-alejandro/project-fulltime-force/commits";

  try {
    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    const e = new Error("Something was wrong");
    return res.status(404).json({ msg: e.message, error });
  }
};

export { commitController };
