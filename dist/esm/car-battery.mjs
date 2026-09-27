export const name="car-battery";
export const id="dl_88f05b14c90944f9b6d9";
export const url=new URL("../icons/car-battery.svg?v=f7aef4143d72c2d5bb2616a853cba999e2191b9a0d76ca29b6786867be6e0995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
