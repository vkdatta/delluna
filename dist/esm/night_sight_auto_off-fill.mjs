export const name="night_sight_auto_off-fill";
export const id="dl_0309881ac6834a27b300";
export const url=new URL("../icons/night_sight_auto_off-fill.svg?v=bc7725b4520e0bfcab4d9bd34d5ad4c1ac8499c373792a865d12867e89f6900c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
