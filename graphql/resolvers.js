import { getMovies, getVideos, getById, addVideo, deleteVideo } from "./db";

const resolvers = {
  Query: {
    name: () => "idpokute",
    videos: () => getVideos(),
    video: (_, { id }) => getById(id),
    movies: (_, { limit, rating }) => getMovies(limit, rating)
  },
  Mutation: {
    addVideo: (_, { title, state, date }) => addVideo(title, state, date),
    deleteVideo: (_, { id }) => deleteVideo(id)
  }
};

export default resolvers;
