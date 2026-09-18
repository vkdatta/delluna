export const name="laps-fill";
export const id="dl_7b01c952f25c41ae86d0";
export const url=new URL("../icons/laps-fill.svg?v=c8ef6b3f4465d882a71073d2d8054943c59f3338a5e138f3bc231cceb16b2f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
