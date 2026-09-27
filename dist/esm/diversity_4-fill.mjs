export const name="diversity_4-fill";
export const id="dl_1379ee9eb844b3a5c526";
export const url=new URL("../icons/diversity_4-fill.svg?v=274371719fc248f516371cc4d9a94c8bafb00c63f536c84f005d788716d05c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
