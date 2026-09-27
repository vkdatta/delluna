export const name="chip_extraction-fill";
export const id="dl_07b60fd352efab9f903f";
export const url=new URL("../icons/chip_extraction-fill.svg?v=c8179fb53f0549d74c7b4970c24d1bc54cca5ac13e81148de9b21631a73a9928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
