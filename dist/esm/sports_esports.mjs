export const name="sports_esports";
export const id="dl_e2a6020ed6f11b99483e";
export const url=new URL("../icons/sports_esports.svg?v=86cbfe49785e2d1a2802347f87df682790811f5b234f9884bb0a7c37fc9e2050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
