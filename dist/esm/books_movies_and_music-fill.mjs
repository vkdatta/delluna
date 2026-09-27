export const name="books_movies_and_music-fill";
export const id="dl_da2733f37ef869c8b508";
export const url=new URL("../icons/books_movies_and_music-fill.svg?v=306d6facd1bfde2dedcf567e3e01e47d9844a288c77a8cc237dd48b504ad6d10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
