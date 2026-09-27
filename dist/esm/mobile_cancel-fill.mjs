export const name="mobile_cancel-fill";
export const id="dl_b0e7e5d230960b9088fb";
export const url=new URL("../icons/mobile_cancel-fill.svg?v=b2bab28d18fae8bc602fce5c91f93aef1bf7bb8c8e604ada15ae3b2a8912153a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
