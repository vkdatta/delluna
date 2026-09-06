export const name="lightning-slash-duotone";
export const id="dl_117ccd9b48a94b0787e8";
export const url=new URL("../icons/lightning-slash-duotone.svg?v=fae069e661ef684e1bc1b90af8727ed2085de0212156d0d3360e67444ae213d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
