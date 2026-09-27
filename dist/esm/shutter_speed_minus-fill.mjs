export const name="shutter_speed_minus-fill";
export const id="dl_1d75d24df4f3e60f5360";
export const url=new URL("../icons/shutter_speed_minus-fill.svg?v=b216e524dd12e935834b2809a108b85a1baec9868068daafcb46cac0f0fc25b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
