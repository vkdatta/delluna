export const name="wifi-low";
export const id="dl_df332a72b32d47218109";
export const url=new URL("../icons/wifi-low.svg?v=20c43d7b341c3c48a8ea719b3209449e6ff03b7d100283d60a8851f7f54e63f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
