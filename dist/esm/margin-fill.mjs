export const name="margin-fill";
export const id="dl_52bb6956f58614841f64";
export const url=new URL("../icons/margin-fill.svg?v=764583cec3a84f7d1d4be4510dd48f3be20fc70d2fa51fbafa712f7c48a5abbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
