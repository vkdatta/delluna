export const name="home_work-fill";
export const id="dl_7dec97b2531e1387989f";
export const url=new URL("../icons/home_work-fill.svg?v=96485b53e1e0bcee14f6057c160c359d276e0d14ac23f4f0c898b899b7bc2a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
