export const name="reply-fill";
export const id="dl_ceac06aa7fd37d05d31f";
export const url=new URL("../icons/reply-fill.svg?v=8d91631acdbe369be2962366539c7dc7c2d19934a2af8e9c4cf09e161634dde5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
