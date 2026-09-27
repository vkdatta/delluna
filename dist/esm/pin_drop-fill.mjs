export const name="pin_drop-fill";
export const id="dl_07bca4196a74661f0507";
export const url=new URL("../icons/pin_drop-fill.svg?v=cd4992c9d87d662aa5097889c2a9e50a802f09b683eb429142b34a4c170d06ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
