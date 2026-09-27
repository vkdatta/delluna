export const name="city-light";
export const id="dl_bfe80883bf0b4e158cef";
export const url=new URL("../icons/city-light.svg?v=f9f95a50c61282e0d7388df7560b649922599fe0b58dead602b9210ce9e30fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
