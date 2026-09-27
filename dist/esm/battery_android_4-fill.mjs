export const name="battery_android_4-fill";
export const id="dl_f3d451d883d4d7d39583";
export const url=new URL("../icons/battery_android_4-fill.svg?v=36200e61d063407cd5d609fe6012a58e53c543ca2610bd50b8c4edd7687e4b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
