export const name="movie_speaker-fill";
export const id="dl_460094d334da7e2dbf95";
export const url=new URL("../icons/movie_speaker-fill.svg?v=614b6caff004e50d302ed4e578a16847f496880abc8616ff98af6f1f9dd8e64e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
