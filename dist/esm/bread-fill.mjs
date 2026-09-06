export const name="bread-fill";
export const id="dl_ec64ecb7e50c406db79f";
export const url=new URL("../icons/bread-fill.svg?v=4deedc73b40677af14ab37ee65d10eabbbc6b269f9f31a215f162ba08c56455a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
