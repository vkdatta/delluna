export const name="hotel_class-fill";
export const id="dl_6c4f2b55b2b8bab32be0";
export const url=new URL("../icons/hotel_class-fill.svg?v=368fbf6d58cf0bcd4338f862c77cf23ef3fb1716405bece42083e962aab6bc5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
