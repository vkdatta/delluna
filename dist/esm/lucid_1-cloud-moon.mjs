export const name="lucid_1-cloud-moon";
export const id="dl_4eae36cb2ee8463e8d1f";
export const url=new URL("../icons/lucid_1-cloud-moon.svg?v=dec59938a6c2cac8804298452f14276650483f9011e0d361dd883c03ac04a48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
