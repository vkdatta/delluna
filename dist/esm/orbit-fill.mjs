export const name="orbit-fill";
export const id="dl_743013285f709af77575";
export const url=new URL("../icons/orbit-fill.svg?v=3c2095ce0b3a5c5a435f344cafc089000280bb767124b58efd6e75eca9acdf02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
