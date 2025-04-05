const supabase = supabase.createClient('https://your-project.supabase.co', 'your-anon-key');

async function addMovie() {
  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const poster = document.getElementById('poster').value;
  const category = document.getElementById('category').value;
  const stream = document.getElementById('stream').value;
  const download = document.getElementById('download').value;
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  const { error } = await supabase.from('movies').insert([{
    title, year, poster, category, stream, download, slug
  }]);

  if (!error) {
    alert('Movie added!');
  } else {
    alert('Error adding movie');
  }
}
