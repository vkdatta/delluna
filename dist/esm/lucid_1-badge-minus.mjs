export const name="lucid_1-badge-minus";
export const id="dl_4e48823cd578451e883d";
export const url=new URL("../icons/lucid_1-badge-minus.svg?v=d8c76071cb647aafcb335b81c7d4cf69521e768df0d8249c80873f51dada07ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
