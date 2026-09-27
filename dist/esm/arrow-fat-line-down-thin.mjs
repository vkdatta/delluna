export const name="arrow-fat-line-down-thin";
export const id="dl_f0ec3d00ca34484bb7f6";
export const url=new URL("../icons/arrow-fat-line-down-thin.svg?v=c7a6e932eef29ad893f61b1c0640ab415f88effdbd1fbd382dc51cf4201a75e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
