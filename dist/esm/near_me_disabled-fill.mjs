export const name="near_me_disabled-fill";
export const id="dl_b1afb968ae7df3b692ba";
export const url=new URL("../icons/near_me_disabled-fill.svg?v=4a50660d428cb7b052ed4a8b232740ddd0fc0e1c665998a4bb8fafc1c8d3a666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
