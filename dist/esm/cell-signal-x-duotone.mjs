export const name="cell-signal-x-duotone";
export const id="dl_0cd69ea5eeb54be880b4";
export const url=new URL("../icons/cell-signal-x-duotone.svg?v=837cfe684e7cfb376094498e76e8dc31b8ee1e0416177db665bbd3037acaf9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
