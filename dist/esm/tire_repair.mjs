export const name="tire_repair";
export const id="dl_3580736a5475259feb23";
export const url=new URL("../icons/tire_repair.svg?v=3e2fc811067e17d03d4bb44c089dddbfa0647ecae1d9af0faad7206516162f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
