export const name="notifications_off-fill";
export const id="dl_73f3e5239da54b869fa2";
export const url=new URL("../icons/N/notifications_off-fill.svg?v=2c71faec9b1b5c6a9d8231517d2cda87c97590cddd26f3f3a59b5fd1c599976f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
