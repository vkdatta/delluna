export const name="sort-ascending-fill";
export const id="dl_277729e4fee5a159408c";
export const url=new URL("../icons/sort-ascending-fill.svg?v=562efcaabb4c0aabe7a974e06a3e6919f5c53c3e2f6fbc886663933ff727fd31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
