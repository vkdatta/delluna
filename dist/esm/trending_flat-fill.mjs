export const name="trending_flat-fill";
export const id="dl_855e96428c93a59777a6";
export const url=new URL("../icons/trending_flat-fill.svg?v=48de145f05cbb652047f245ad532491e16606cae725cc7fa7c22e72dc4366048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
