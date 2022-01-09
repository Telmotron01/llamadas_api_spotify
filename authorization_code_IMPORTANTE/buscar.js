const { default: axios } = require("axios");

var token;

const SPOTIFY_API_BASE = "https://api.spotify.com/v1";

const setToken = (t) => {
  token = t;
};

const search = async (s) => {
  try {
    var data = await axios.get(
      `${SPOTIFY_API_BASE}/search?q=${s}&type=track&limit=10`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

exports.setToken = setToken;
exports.search = search;
