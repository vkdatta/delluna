export const name="thermometer-sun";
export const id="dl_0da0a292502b4b2abbc6";
export const url=new URL("../icons/thermometer-sun.svg?v=6aee22fe766a3218787607c293714c481ebb587409d307b0edb04b518c00a79d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
