export const name="delete_sweep-fill";
export const id="dl_2b4d2f97b4f987975692";
export const url=new URL("../icons/delete_sweep-fill.svg?v=6aae4865dec9c581dddb9a3d413e2ab1e4d3ecd4f580ac85ff2301505c06e5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
