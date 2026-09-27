export const name="category-fill";
export const id="dl_fbdaf1d65b2f6fc0e806";
export const url=new URL("../icons/category-fill.svg?v=d0a92b07a33865cdb55638b6b2db15a503d3fbdaf9cfd21df3e8dc6ed9ef5434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
