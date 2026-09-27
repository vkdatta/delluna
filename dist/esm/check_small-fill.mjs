export const name="check_small-fill";
export const id="dl_371454203201bcb53cbe";
export const url=new URL("../icons/check_small-fill.svg?v=23397340231cb2b7456daac261f04c2f1217a8189c91207ffcd1616b7fdab29e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
