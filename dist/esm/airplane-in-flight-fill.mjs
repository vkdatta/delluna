export const name="airplane-in-flight-fill";
export const id="dl_584c4ffd5c5a4246badf";
export const url=new URL("../icons/airplane-in-flight-fill.svg?v=8796639bb8ebd597db894487b6a7796fa510acac325a8ea65e29689b61059faf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
