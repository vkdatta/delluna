export const name="water_bottle_large-fill";
export const id="dl_a932da829afea6abcbe8";
export const url=new URL("../icons/water_bottle_large-fill.svg?v=9f10c8b6fc3f29221625c68b35e88542b1e4a17a4142f8f030c21df6acb3cec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
