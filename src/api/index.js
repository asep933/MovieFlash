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
