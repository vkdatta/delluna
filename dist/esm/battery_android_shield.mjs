export const name="battery_android_shield";
export const id="dl_0dca469251abea3a933e";
export const url=new URL("../icons/battery_android_shield.svg?v=70406d5aed695f46fa7c1d56ed4eb1d1ca88cf79679ee27235274d2489eefea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
