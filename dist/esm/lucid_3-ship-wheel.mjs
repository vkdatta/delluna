export const name="lucid_3-ship-wheel";
export const id="dl_9a2529100091499493f5";
export const url=new URL("../icons/lucid_3-ship-wheel.svg?v=10c5cfbc1796e7a87d36a2cdb14256bb687be61cceb53b2a4c51b7365e1d7186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
