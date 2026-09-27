export const name="bathtub-fill";
export const id="dl_e2b23199ccb045ff9fdd";
export const url=new URL("../icons/bathtub-fill.svg?v=fc61c12e902304b865f9a44655b4c8827938a7f6225ae6f5567981e74296b6be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
