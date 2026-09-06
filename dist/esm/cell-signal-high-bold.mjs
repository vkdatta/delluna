export const name="cell-signal-high-bold";
export const id="dl_130b4c3d5c854c798f6c";
export const url=new URL("../icons/cell-signal-high-bold.svg?v=1d539ef5348db3bc253548aa5b41edfe01c432a652010711f29ca8274ab4e030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
