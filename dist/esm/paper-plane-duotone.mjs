export const name="paper-plane-duotone";
export const id="dl_41dbb935526f4a9fa8e3";
export const url=new URL("../icons/paper-plane-duotone.svg?v=047012bf92e8e7517aaf2282498ad484c63cc24d19c309e80bc15f62566741fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
