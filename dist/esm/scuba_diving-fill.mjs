export const name="scuba_diving-fill";
export const id="dl_f792d038082d46c5874e";
export const url=new URL("../icons/S/scuba_diving-fill.svg?v=b0f2224b57aa5b187ae5d78c72cd9755ca2606bab768e8f3af389969af3e07b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
