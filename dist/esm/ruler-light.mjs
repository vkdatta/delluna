export const name="ruler-light";
export const id="dl_ad4b39e168324e908844";
export const url=new URL("../icons/ruler-light.svg?v=4e23a090aae41a1195e0b2c98557b59c9712623df86cf79b053b5371cbef5530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
