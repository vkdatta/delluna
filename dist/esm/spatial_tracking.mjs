export const name="spatial_tracking";
export const id="dl_169422e04466530199a7";
export const url=new URL("../icons/spatial_tracking.svg?v=7c4822c2392de84c3b98bfefa0cb77ad26f14e312393c3575d3f39724acf5ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
