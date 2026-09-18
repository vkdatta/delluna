export const name="notifications_unread";
export const id="dl_c10e10e6e7154ad9a92f";
export const url=new URL("../icons/notifications_unread.svg?v=37002c6edbba53f15a02e12d1adc39ca8354bfff61b1f0546296cd034c9960f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
