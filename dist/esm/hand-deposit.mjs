export const name="hand-deposit";
export const id="dl_1b14519ceef74688b47b";
export const url=new URL("../icons/hand-deposit.svg?v=e35803d742947d95ba79a907ba3271e13799d5c8a58dfbea58aa36a39b7ba7c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
