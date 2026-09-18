export const name="domain_verification-fill";
export const id="dl_1776cf6cd533473396fd";
export const url=new URL("../icons/domain_verification-fill.svg?v=d3beb52578022fab89cc6f3f017831ddfdd8d1427a32f40baf59df84b55a4af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
