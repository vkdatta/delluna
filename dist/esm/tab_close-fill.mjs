export const name="tab_close-fill";
export const id="dl_9180ed3388b2db23849c";
export const url=new URL("../icons/tab_close-fill.svg?v=25a1e37b92f5ada2b1f86c53b0b93e43b6b27748e6eecacdf2d3eac5b6bc72da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
