export const name="production_quantity_limits";
export const id="dl_ffd30856da40cbe3e788";
export const url=new URL("../icons/production_quantity_limits.svg?v=afd1a00bfece4f0445d5ba840bef87240a1b4fe72e7e56e7879d4e6c4d2f3004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
