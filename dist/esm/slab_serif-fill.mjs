export const name="slab_serif-fill";
export const id="dl_651448000a54259eb5d4";
export const url=new URL("../icons/slab_serif-fill.svg?v=b5f1313e5cd996b1b03cb4640bb2e1f27e001a21d4d6739414282d72adae91ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
