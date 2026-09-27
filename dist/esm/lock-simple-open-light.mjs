export const name="lock-simple-open-light";
export const id="dl_5e1574b7eac44ead8503";
export const url=new URL("../icons/lock-simple-open-light.svg?v=4a763dc9fdc50cf8c90b07046e709db2e9500091ed9722f6faaba783293a35c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
