export const name="brand_awareness-fill";
export const id="dl_b6809ada24fa93c1f6e0";
export const url=new URL("../icons/brand_awareness-fill.svg?v=cbd6efa4cd5779897cf20b1b6a306caf1d2f9cb7d075adf48b54024bc14af088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
