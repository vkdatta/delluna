export const name="speed_1_2";
export const id="dl_99691e95e83a477c9fff";
export const url=new URL("../icons/speed_1_2.svg?v=1c1f8ac2c477ee9999f345919f0fa9868d3883914cbf62aaadaa1abbb737a076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
