export const name="music-note-simple";
export const id="dl_b94f6bae6361444b821a";
export const url=new URL("../../icons/M/music-note-simple.svg?v=abae3d33ed9973a31d02eb90cb882f79cc43b753e09419be18469bcdc4cf169d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
