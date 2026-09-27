export const name="movie_off-fill";
export const id="dl_ddf740bd6ee9ded02bdc";
export const url=new URL("../icons/movie_off-fill.svg?v=b94d002f5dda33961b4e06351d69f50a50c75bc4a073e44b53e945cfba42f11d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
