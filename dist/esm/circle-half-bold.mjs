export const name="circle-half-bold";
export const id="dl_4475dff676e24e8eae8b";
export const url=new URL("../icons/circle-half-bold.svg?v=013afcee5fcca31a998cdd795768c1bb1e98b2256ff88726fd41035a32fe64a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
