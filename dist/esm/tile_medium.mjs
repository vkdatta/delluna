export const name="tile_medium";
export const id="dl_2cf731bc9990d82821bb";
export const url=new URL("../icons/tile_medium.svg?v=58620b3ef6e71ad4c226dd37f555ffd4d8324e06d8469cd72f8a6d237cd6082e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
