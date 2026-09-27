export const name="sensor_window";
export const id="dl_bda68504a3d9afb5f6fc";
export const url=new URL("../icons/sensor_window.svg?v=f471e9f89ce50ca83048028dea968eb64a0578de194c7876a588992dc1e89b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
