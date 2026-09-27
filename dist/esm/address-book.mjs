export const name="address-book";
export const id="dl_a29f32c2b9864b82b83c";
export const url=new URL("../icons/address-book.svg?v=41dde831e476622435d5b928a2daf4522ae5d206dac82bd80c938a000c3b8425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
