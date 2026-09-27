export const name="movie_off-fill";
export const id="dl_01a271aa46b80dbec705";
export const url=new URL("../icons/movie_off-fill.svg?v=2b3b8a438ef1fd7e2261c066fcf95d4692cf60dabb40ad9416c96a30f4a3abf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
