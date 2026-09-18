export const name="movie_off";
export const id="dl_502023b0c913412a8cda";
export const url=new URL("../icons/movie_off.svg?v=c0734b798cf1fecd8809117362c2c71e408885ec008043ac59026c700fb8537c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
