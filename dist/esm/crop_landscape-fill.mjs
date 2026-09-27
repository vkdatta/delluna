export const name="crop_landscape-fill";
export const id="dl_2cd5ec1167a6e5167bb0";
export const url=new URL("../icons/crop_landscape-fill.svg?v=c511517de341e71db570dd3b7760642a3c0866bf966d1df353e171ff8f2418be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
