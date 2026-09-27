export const name="beer-bottle";
export const id="dl_9c493d03224247bba50e";
export const url=new URL("../icons/beer-bottle.svg?v=fb221dd6dc7f34de8aa090fbef7a2f7700b297a005d877e36f1bb46db83a051d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
