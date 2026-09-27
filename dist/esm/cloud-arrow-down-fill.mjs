export const name="cloud-arrow-down-fill";
export const id="dl_1fc0e1a92d07486d9d9e";
export const url=new URL("../icons/cloud-arrow-down-fill.svg?v=4fecea19598424267c3d3c4642223480f14111e136244b81334712b4888d3b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
