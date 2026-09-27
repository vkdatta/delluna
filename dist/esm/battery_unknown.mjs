export const name="battery_unknown";
export const id="dl_c80caeb135145f6ca743";
export const url=new URL("../icons/battery_unknown.svg?v=6a444d436ac8af0bef2533e2576e312b2acfc894044c77cda6eb0cf0f8acbc9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
