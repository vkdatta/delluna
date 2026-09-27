export const name="tibia-fill";
export const id="dl_0d7b01b30ae7b76acf2d";
export const url=new URL("../icons/tibia-fill.svg?v=ffe0ccddf4bf53d5fecb981d00a98f915aa7ed58e4c63dc2a7dc92cde71c01fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
