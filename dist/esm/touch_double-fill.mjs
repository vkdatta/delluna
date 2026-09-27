export const name="touch_double-fill";
export const id="dl_9383f278d29ef6fa0fe9";
export const url=new URL("../icons/touch_double-fill.svg?v=ce286ce102e235a7d3088d66548994fde8f8b2222deceb77e68a6d7c0d607f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
