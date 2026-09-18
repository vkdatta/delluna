export const name="visibility_off-fill";
export const id="dl_0a846b227023448eb987";
export const url=new URL("../icons/V/visibility_off-fill.svg?v=d79a338d83362058c402f92bfba5881e00918d35273afe07d91844f6e22099ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
