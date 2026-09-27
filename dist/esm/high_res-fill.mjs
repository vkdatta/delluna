export const name="high_res-fill";
export const id="dl_82e722752d758f17899b";
export const url=new URL("../icons/high_res-fill.svg?v=604dbe3dc06c2f57fc6960126ccc6591e5788bdd1e005e373a274a9feb4686d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
