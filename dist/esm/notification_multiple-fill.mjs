export const name="notification_multiple-fill";
export const id="dl_490fd6ae0fed24cf5e21";
export const url=new URL("../icons/notification_multiple-fill.svg?v=c12b6ad5a3298b2901eb0ed5e84027bc521f6ed49fb067229535614af127ab32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
