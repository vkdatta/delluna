export const name="lucid_3-pi";
export const id="dl_b7ed59f03aa24ce09c9f";
export const url=new URL("../icons/lucid_3-pi.svg?v=223ee2c2e4d81340571611312b85708f35ea608f4edb8aa5f1bbde949637e15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
