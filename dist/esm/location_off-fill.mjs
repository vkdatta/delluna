export const name="location_off-fill";
export const id="dl_13e2665ce959f9bb2285";
export const url=new URL("../icons/location_off-fill.svg?v=2f2cf8a19b586f08d4c650687007fafbb6afda0d6f257395051d93d57ad7ad37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
