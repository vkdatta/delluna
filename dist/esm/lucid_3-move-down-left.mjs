export const name="lucid_3-move-down-left";
export const id="dl_3a830a957f5a489d89c5";
export const url=new URL("../icons/lucid_3-move-down-left.svg?v=2d4aa0250dcc2ee1e9ea7790cadcdf80f190b3ddede249d14ef2e179523294e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
