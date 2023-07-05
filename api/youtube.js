import { API_KEY } from "@env";

export const fetchTrendingVideos = async (params) => {
  const url = `https://youtube-v3-alternative.p.rapidapi.com/trending?geo=US&type=now&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
