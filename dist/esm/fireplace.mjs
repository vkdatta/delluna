export const name="fireplace";
export const id="dl_4625396aa8bb4fb98603";
export const url=new URL("../icons/fireplace.svg?v=efccdaaacd1e9d030a4213e57214c33abc5ac6b43fad13d65e37050799920461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
