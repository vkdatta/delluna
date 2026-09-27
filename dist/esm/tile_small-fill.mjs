export const name="tile_small-fill";
export const id="dl_76660d3674923109f436";
export const url=new URL("../icons/tile_small-fill.svg?v=56e3a133c46ba23e43ca917daeb22b093a2e3ef186cdf147690bc77b2f6e3d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
