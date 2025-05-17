import { YoutubeTranscript } from 'youtube-transcript';

async function getTranscript(videoId) {
  const transcript = await YoutubeTranscript.fetchTranscript(videoId, {lang: 'en'});

  return transcript;
  return transcript.map(entry => entry.text).join(' ');
}

// getTranscript('dQw4w9WgXcQ').then(console.log);
getTranscript('https://www.youtube.com/watch?v=5MgBikgcWnY').then(console.log);
