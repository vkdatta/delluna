export const name="perm_data_setting-fill";
export const id="dl_bc63c45f025f309a61a9";
export const url=new URL("../icons/perm_data_setting-fill.svg?v=0cb2990d20c703c4989df2de0307f135f0057a11320ecaf146327e6b1d06a5d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
