export const name="lucid_3-smartphone-nfc";
export const id="dl_f5e5509a285148d18ad4";
export const url=new URL("../icons/lucid_3-smartphone-nfc.svg?v=84d139e8122f112eec5f8949ad5cf42842c78f7c8d3a971a7a499e6f1ccdf320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
