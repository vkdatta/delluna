export const name="photo_prints";
export const id="dl_17c7087f02a0cd8207f7";
export const url=new URL("../icons/photo_prints.svg?v=219c51822da1c6eb1490bf292b211528bcd394ff13f7e43f23ed463ad826a9dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
