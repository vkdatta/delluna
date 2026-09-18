export const name="tab_close_right-fill";
export const id="dl_08a5a6cc34964e37bbd0";
export const url=new URL("../icons/T/tab_close_right-fill.svg?v=a72864f6d578faed24df965981ae6d72071f63d521ce699f1780afbb8f346718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
