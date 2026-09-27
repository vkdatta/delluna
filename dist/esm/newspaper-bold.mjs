export const name="newspaper-bold";
export const id="dl_770371e0eafd4bd8b3d1";
export const url=new URL("../icons/newspaper-bold.svg?v=3cb553d8f0b3204921ac5fccd17fc89c64444bd12574ddcb7d334459e16a478a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
