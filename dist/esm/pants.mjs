export const name="pants";
export const id="dl_1c2ef596987147bda71b";
export const url=new URL("../icons/pants.svg?v=efca935ea1bb2d3bc728a5e24f62cb62dd3ee146aa7e36930b3d403acc84bca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
