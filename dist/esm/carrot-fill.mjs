export const name="carrot-fill";
export const id="dl_3797fb6ac7214d2e81ee";
export const url=new URL("../icons/carrot-fill.svg?v=9d7780011390f338412c8577a4a2d1a65759f616f645ee4f7bd8303783bac5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
