export const name="keyboard_lock";
export const id="dl_9cd667bd5c13b68f9c44";
export const url=new URL("../icons/keyboard_lock.svg?v=6c03ab057967b94083ff9c6445e57a6aa5d801a9f3a7361da1b48391c0b70327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
