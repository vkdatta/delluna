export const name="address-book-thin";
export const id="dl_22cbc782bd4b42c4a955";
export const url=new URL("../icons/address-book-thin.svg?v=8ff6073e1de790a264fb96afd41e6bb41e6dcc2be706c55a09adb8ccab62e204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
