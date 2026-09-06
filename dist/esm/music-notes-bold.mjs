export const name="music-notes-bold";
export const id="dl_2aa5b843ccff4f7db1a2";
export const url=new URL("../icons/music-notes-bold.svg?v=9b46fd28e1d67ed654730c11c1c928366d581eaa337dea44ba33c0a97eb21620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
