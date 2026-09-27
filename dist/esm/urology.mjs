export const name="urology";
export const id="dl_6843d5544df4a3d1a870";
export const url=new URL("../icons/urology.svg?v=4876188482cf02b08f457dc67a783d8bb660c2cdeb71961e30e2d80af6e8fc7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
