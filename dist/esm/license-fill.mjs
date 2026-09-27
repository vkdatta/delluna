export const name="license-fill";
export const id="dl_a226ba793bb642951bb8";
export const url=new URL("../icons/license-fill.svg?v=11d98a8d95f88ff2adf771be0c5c05fa42a9409e7cc415cc2857cae5de88ca32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
