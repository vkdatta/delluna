export const name="baby-fill";
export const id="dl_e1d3d4bab5b44c37bc15";
export const url=new URL("../icons/baby-fill.svg?v=33e21a6a72fa6394f53264d5f6eaa97860b9aaeb36c7aea63e3df3708f29bec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
