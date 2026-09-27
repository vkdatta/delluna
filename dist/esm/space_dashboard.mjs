export const name="space_dashboard";
export const id="dl_65a669378bc852e56a09";
export const url=new URL("../icons/space_dashboard.svg?v=a5ce2c3a9e9dc2f0b1c168dd8e682e31472c3807cd3ebdc1e4b22da3896c2a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
