export const name="address-book-tabs-duotone";
export const id="dl_f2128345db754b828cb0";
export const url=new URL("../icons/address-book-tabs-duotone.svg?v=0667c01419477ed8b8843b647fc915e3f94154baf7d177ba0a58152e1e905812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
