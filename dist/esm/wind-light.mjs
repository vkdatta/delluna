export const name="wind-light";
export const id="dl_ecc2d44d3d5c11dd6b3f";
export const url=new URL("../icons/wind-light.svg?v=89dba95716cdc9398f80f8e0b64e7390e19f3d4315bda2f0f8f8593b941b229b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
