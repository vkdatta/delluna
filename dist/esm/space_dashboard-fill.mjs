export const name="space_dashboard-fill";
export const id="dl_390dc3bc25e9fa8d018f";
export const url=new URL("../icons/space_dashboard-fill.svg?v=25b6d55c283bb74014c90df05fe3fe487306c49af12f899a007457b2391b2e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
