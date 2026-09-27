export const name="unplug";
export const id="dl_9810c88caab34c00ab3a";
export const url=new URL("../icons/unplug.svg?v=05d252a44e52a3f512215ffde229a60fe7b4d9f168d04a5037bfc577f8ff655f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
