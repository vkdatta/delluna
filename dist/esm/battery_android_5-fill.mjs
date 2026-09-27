export const name="battery_android_5-fill";
export const id="dl_b4467681253d699a7132";
export const url=new URL("../icons/battery_android_5-fill.svg?v=7e29e7b2a2d37528e0669d167b52cc82e82022f998c83dd6692f75a608dc7949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
