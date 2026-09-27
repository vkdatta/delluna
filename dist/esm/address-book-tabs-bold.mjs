export const name="address-book-tabs-bold";
export const id="dl_d5504ba212ae4d01a1dc";
export const url=new URL("../icons/address-book-tabs-bold.svg?v=12e85ae4bbc786bcedaffaa0df03fe63c7d818e9fb7e815b597636f3889bdde8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
