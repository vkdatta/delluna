export const name="film-reel-thin";
export const id="dl_bc4a6e8141794aec8a5d";
export const url=new URL("../icons/film-reel-thin.svg?v=5c022b61caa0a034f5366b283e996cdbc24d9b494e2a2ffb714195aa70510d54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
