export const name="address-book-tabs-bold";
export const id="dl_d5504ba212ae4d01a1dc";
export const url=new URL("../icons/address-book-tabs-bold.svg?v=3781cdb38c49cca1ac588488aedec8f218fc907b619c8349224002465131edea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
