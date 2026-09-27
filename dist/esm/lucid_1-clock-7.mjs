export const name="lucid_1-clock-7";
export const id="dl_7f13a88493bf4bdba966";
export const url=new URL("../icons/lucid_1-clock-7.svg?v=3946e5d1dc875162a4f81452226548b8175b634c1e23d6a7de57498db0657c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
