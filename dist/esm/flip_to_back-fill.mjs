export const name="flip_to_back-fill";
export const id="dl_f8e9edaa59db4562a63e";
export const url=new URL("../icons/flip_to_back-fill.svg?v=cf47b7dc46c83288f295bacd713cc2a0dc2c5b27df7f28e6d05e02c3e4993be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
