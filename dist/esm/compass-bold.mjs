export const name="compass-bold";
export const id="dl_9af24588d6f741818e53";
export const url=new URL("../icons/compass-bold.svg?v=002edb8b086f6cdc28f24239693785b640fcd245022be9f00960a9d60f5c9d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
