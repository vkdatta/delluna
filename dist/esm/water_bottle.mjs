export const name="water_bottle";
export const id="dl_153f68b44638b0e54a87";
export const url=new URL("../icons/water_bottle.svg?v=4cb418fac8e51d616606ef796397b458266a3fb8557435a019d74e63cfc00d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
