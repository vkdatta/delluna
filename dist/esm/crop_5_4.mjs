export const name="crop_5_4";
export const id="dl_7414eb11fcad5b0eaaf1";
export const url=new URL("../icons/crop_5_4.svg?v=8de56be20104bf73ba4f7551d4322cbf97f91ec1e6d4de3bd64ff2d958226dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
