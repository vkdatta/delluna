export const name="bungalow-fill";
export const id="dl_e066fd98dd976e9d9fe7";
export const url=new URL("../icons/bungalow-fill.svg?v=6f0d928112adb01665455f16fa77a262d94b8909371c525a55ed350d43d83873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
