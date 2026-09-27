export const name="tipi-duotone";
export const id="dl_ddc5226fa8a16b1d45d9";
export const url=new URL("../icons/tipi-duotone.svg?v=7079c0b27778f1b83005e7b0e77bb5f3d8e60575cfc72cec6442dd687072f30d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
