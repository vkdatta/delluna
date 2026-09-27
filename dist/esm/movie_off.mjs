export const name="movie_off";
export const id="dl_ae62374f090ad417d504";
export const url=new URL("../icons/movie_off.svg?v=ae3fa1a3d7fbf5f9c4116208ba84c78433f09dd16c675a3f2444cc1b36304f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
