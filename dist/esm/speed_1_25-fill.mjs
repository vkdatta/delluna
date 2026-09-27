export const name="speed_1_25-fill";
export const id="dl_92ae2187854e459b78fa";
export const url=new URL("../icons/speed_1_25-fill.svg?v=ac0bbb6d3ed22aaa744c8f079de3f05fe4d173ec3ca783276dc8845b12b6e338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
