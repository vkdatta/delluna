export const name="disc_full";
export const id="dl_5df1fcd5f2fc0c9b752f";
export const url=new URL("../icons/disc_full.svg?v=d0d33de1a274b3d3b1387e722556155327d0a86cdba1737b5eeb8d9d2224ebb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
