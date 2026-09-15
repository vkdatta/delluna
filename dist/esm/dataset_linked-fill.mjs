export const name="dataset_linked-fill";
export const id="dl_d867689b277e43039df9";
export const url=new URL("../icons/D/dataset_linked-fill.svg?v=cfcda5c57b1bf783de2b8670116b84e6280e3d2570d0e74a8210a903584c5e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
