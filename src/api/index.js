export async function getPopular() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2E3ZDBhM2VkYmYwZTcxYzdiZWExNjllNTgyMTkyNyIsInN1YiI6IjY1ZTQ3NTRhYzk5ODI2MDE3YjYzOTQ5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G-agWXv4vUnttTdbGkzQNZO7sPjuUEkwHN8mgMAeOq0`,
    },
  };

  return await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

export async function getByQuery(query) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2E3ZDBhM2VkYmYwZTcxYzdiZWExNjllNTgyMTkyNyIsInN1YiI6IjY1ZTQ3NTRhYzk5ODI2MDE3YjYzOTQ5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G-agWXv4vUnttTdbGkzQNZO7sPjuUEkwHN8mgMAeOq0`,
    },
  };

  return await fetch(
    `
    https://api.themoviedb.org/3/search/movie?query=${query}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

export const getTopRated = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2E3ZDBhM2VkYmYwZTcxYzdiZWExNjllNTgyMTkyNyIsInN1YiI6IjY1ZTQ3NTRhYzk5ODI2MDE3YjYzOTQ5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G-agWXv4vUnttTdbGkzQNZO7sPjuUEkwHN8mgMAeOq0",
    },
  };

  return await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
};
