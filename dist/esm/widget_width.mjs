export const name="widget_width";
export const id="dl_1152aa13a0c0cb80bc9e";
export const url=new URL("../icons/widget_width.svg?v=8305c4903e8755f1bb06a78441a4573d185e7b78550e71b68527198d60cf9fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
