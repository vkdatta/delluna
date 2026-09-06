export const name="currency-cny";
export const id="dl_8f1795f5217542daa38b";
export const url=new URL("../icons/currency-cny.svg?v=768fb79c0acc37c033ed38ad95523b9d577f6fe40a9022d48203f0057b1ce535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
