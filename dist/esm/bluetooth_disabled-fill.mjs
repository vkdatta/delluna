export const name="bluetooth_disabled-fill";
export const id="dl_59d4fec576b0ad09992b";
export const url=new URL("../icons/bluetooth_disabled-fill.svg?v=24bec819a2c9c40ee61809472a135aaecff5c3004b0b8c2c3fa3ba8f154aee81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
