export const name="cardio_load-fill";
export const id="dl_7606e423cfc9f8b1707e";
export const url=new URL("../icons/cardio_load-fill.svg?v=77fa3f7527930f50a541e12eb90f4c0bfb41efc493eacbcab71aa51e637aa059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
