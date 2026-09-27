export const name="hanami_dango-fill";
export const id="dl_d1e7dae89fd642f8f30b";
export const url=new URL("../icons/hanami_dango-fill.svg?v=355cb6764e852d424b0f285b2d21e684068b9a08cfa6ead0d88b5f967f6139d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
