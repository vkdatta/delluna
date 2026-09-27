export const name="stars";
export const id="dl_e88f32ddfcb2985e6be9";
export const url=new URL("../icons/stars.svg?v=d0e721d5e67434585242911e6167180d96f9f36af02d6ec689e3702e369e44a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
