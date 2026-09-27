export const name="laps-fill";
export const id="dl_5f924ef41746aeb2e7de";
export const url=new URL("../icons/laps-fill.svg?v=c8ef6b3f4465d882a71073d2d8054943c59f3338a5e138f3bc231cceb16b2f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
