export const name="lucid_3-ship-wheel";
export const id="dl_9a2529100091499493f5";
export const url=new URL("../icons/lucid_3-ship-wheel.svg?v=867f86729c8dcd9c191c8de0e77f2364f62269b1bcc58591729df8a81d2aa03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
