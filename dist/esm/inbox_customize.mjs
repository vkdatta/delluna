export const name="inbox_customize";
export const id="dl_90a3baa6bcfba7f36bbb";
export const url=new URL("../icons/inbox_customize.svg?v=defba378d41d8f9e07ececb62fb6f26fe6e9a600d961cb1da4de63bb2f769fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
