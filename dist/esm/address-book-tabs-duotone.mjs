export const name="address-book-tabs-duotone";
export const id="dl_f2128345db754b828cb0";
export const url=new URL("../icons/address-book-tabs-duotone.svg?v=ffcb8f3e434c77e409a9f1e59ce82713d417797abd35e1ceb8daefc5d5d0c503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
