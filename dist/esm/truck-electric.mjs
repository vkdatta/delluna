export const name="truck-electric";
export const id="dl_384b85e546d4412699f8";
export const url=new URL("../icons/truck-electric.svg?v=f08de7b5126fdb70f713bd4bbb872137d4b411182eec28266fb5104a33a16a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
