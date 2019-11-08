import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};

export let videos = [
  {
    id: 1,
    title: "hello",
    state: "publish",
    date: "2019-10-04"
  },
  {
    id: 2,
    title: "world",
    state: "publish",
    date: "2019-10-05"
  },
  {
    id: 4,
    title: "wow",
    state: "publish",
    date: "2019-10-06"
  }
];

export const getVideos = () => videos;

export const getById = id => {
  const filteredVideos = videos.filter(video => video.id === id);
  return filteredVideos[0];
};

export const deleteVideo = id => {
  const cleanedVideos = videos.filter(video => video.id !== id);
  if (videos.length > cleanedVideos.length) {
    videos = cleanedVideos;
    console.log(videos);
    return true;
  } else {
    console.log(videos);
    return false;
  }
};

export const addVideo = (title, state, date) => {
  const newVideo = {
    id: videos.length + 1,
    title,
    state,
    date
  };

  videos.push(newVideo);
  return videos;
};
