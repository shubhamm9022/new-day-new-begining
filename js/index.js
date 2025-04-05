const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchMovies(category = 'all') {
  let { data: movies } = await supabase
    .from('movies')
    .select('*')
    .order('created_at', { ascending: false });

  if (category !== 'all') {
    movies = movies.filter(m => m.category === category);
  }

  const grid = document.getElementById('movieGrid');
  grid.innerHTML = movies.map(movie => `
    <div class="movie-card">
      <a href="movie.html?slug=${movie.slug}">
        <img src="${movie.poster}" alt="${movie.title}" />
        <h3>${movie.title} (${movie.year})</h3>
      </a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMovies();

  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', e => fetchMovies(e.target.value));
});
