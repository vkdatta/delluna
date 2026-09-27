export const name="bluetooth-x";
export const id="dl_420b644c88e64b47bf06";
export const url=new URL("../icons/bluetooth-x.svg?v=68440184131a8db1e91286c9b34b60ccc1eeb8582edc2c41d4b66819c7d7963b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
