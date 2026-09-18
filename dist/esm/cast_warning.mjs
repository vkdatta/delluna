export const name="cast_warning";
export const id="dl_f90b4de943a74a4aa849";
export const url=new URL("../icons/cast_warning.svg?v=62956c014228d778ba66ab9b2b67b1e453a138980645413f5d54a5496eaba8c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
