export const name="mountain_steam";
export const id="dl_0ded792cff84db417314";
export const url=new URL("../icons/mountain_steam.svg?v=7cdb5118766bd8661a31cf29c26c1a02f111432769d343f49e1c68a2a0d69d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
