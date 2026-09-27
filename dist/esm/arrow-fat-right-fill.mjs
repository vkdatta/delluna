export const name="arrow-fat-right-fill";
export const id="dl_0b0d703745964699ae78";
export const url=new URL("../icons/arrow-fat-right-fill.svg?v=0ee2c8fdf5501fd996d2c4ed62d48404f5ec6011fecf8bb956dd7a755224b1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
