import axios from "axios";

export const fetchData = async (country, experience) => {
  try {
    const res = await axios.get("http://localhost:5000/analyze", {
      params: { country, experience },
    });
    return res.data;
  } catch (error) {
    throw new Error("API error");
  }
};
