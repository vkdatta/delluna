export const name="cell-signal-high-bold";
export const id="dl_130b4c3d5c854c798f6c";
export const url=new URL("../icons/cell-signal-high-bold.svg?v=0afc0609f0b3e1713cba71413c4f642bae37f429303f94f51eb9fc963f2a605d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
