export const name="featured_seasonal_and_gifts-fill";
export const id="dl_bef794313d72a9e5fcd6";
export const url=new URL("../icons/featured_seasonal_and_gifts-fill.svg?v=00a2f179e276cb83e2943fe045ab012fdd8630cb815b3fda4139af8f4449afd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
