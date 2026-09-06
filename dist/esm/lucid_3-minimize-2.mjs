export const name="lucid_3-minimize-2";
export const id="dl_b6c863f0cc9547dc8971";
export const url=new URL("../icons/lucid_3-minimize-2.svg?v=cd28dccfd237fb2a278b849d3e0b9eb65b59452416983745ac5ec03014ac7dbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
