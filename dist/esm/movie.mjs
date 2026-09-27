export const name="movie";
export const id="dl_a2649f82449d19b5d7e7";
export const url=new URL("../icons/movie.svg?v=0f7162200b6914a2a24972a1725bf2e048773636e2c55f289f97ce9a76b1d565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
