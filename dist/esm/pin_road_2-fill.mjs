export const name="pin_road_2-fill";
export const id="dl_9143e1e2c3dc4c7fa1a1";
export const url=new URL("../icons/P/pin_road_2-fill.svg?v=ef4807a3d79e710c65626153bd6ac2e3de740855e1aabdd6f0bef0bf1f2fac4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
