export const name="water_drops";
export const id="dl_795eb8831162eb1aef96";
export const url=new URL("../icons/water_drops.svg?v=94d6e803f0d6e1011a0e00fb50f716957b9b53775b7df4878556aa7359251e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
