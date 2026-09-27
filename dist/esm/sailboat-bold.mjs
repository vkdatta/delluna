export const name="sailboat-bold";
export const id="dl_dcac81132557a2713137";
export const url=new URL("../icons/sailboat-bold.svg?v=605ed151fab6b253419e2baaab0a27730f6856edda9a3a9a02934581a5d1e45a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
