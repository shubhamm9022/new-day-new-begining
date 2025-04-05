async function loadMovieDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const res = await fetch('data/movies.json');
  const movies = await res.json();
  const movie = movies.find(m => m.id === id);
  if (!movie) return;

  const container = document.getElementById('movie-detail');
  container.innerHTML = \`
    <h1>\${movie.title}</h1>
    <img src="\${movie.poster}" alt="\${movie.title}" style="width:200px;">
    <p><strong>Genre:</strong> \${movie.genre.join(', ')}</p>
    <p><strong>Year:</strong> \${movie.year}</p>
    <p>\${movie.description}</p>
    <h3>Watch Now</h3>
    <iframe src="\${movie.streamLink}" width="100%" height="400px"></iframe>
    <br>
    <a href="\${movie.downloadLink}" target="_blank"><button>Download</button></a>
  \`;
}
loadMovieDetail();
