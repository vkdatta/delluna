export const name="movie_info";
export const id="dl_537034c4c2c9a0e6f58a";
export const url=new URL("../icons/movie_info.svg?v=5b5ed88d9cfe3c77c6a193260a3b44b2c5206cff4d5a7572fadf952705ebb954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
