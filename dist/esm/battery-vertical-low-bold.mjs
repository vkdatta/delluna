export const name="battery-vertical-low-bold";
export const id="dl_9685083bbeb641b594f0";
export const url=new URL("../icons/battery-vertical-low-bold.svg?v=f661077ad8e7c112bbb2ea525c8f2cf2c39b8d7883ccbae093e47efbe87a0561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
