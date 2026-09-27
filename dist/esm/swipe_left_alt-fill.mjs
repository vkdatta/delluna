export const name="swipe_left_alt-fill";
export const id="dl_0b0b326f8117daee6b02";
export const url=new URL("../icons/swipe_left_alt-fill.svg?v=275be809eb40cbcfddec5a3ff1062993e4bcef5d6407f8ed7dbd60d152813076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
