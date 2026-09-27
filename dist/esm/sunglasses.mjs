export const name="sunglasses";
export const id="dl_9353314ef1136b68df13";
export const url=new URL("../icons/sunglasses.svg?v=c3f1c499ac2fdb1d40d0ee5d28127d9e82d780168ccb8774726d0b3bfaaf6290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
