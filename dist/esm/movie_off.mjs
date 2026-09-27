export const name="movie_off";
export const id="dl_a4555fc1674de989d733";
export const url=new URL("../icons/movie_off.svg?v=e12ae5039c58e8a1a802ede691712279a4d3de986cf9c8115c8f568c09d921fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
