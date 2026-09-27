export const name="widget_width-fill";
export const id="dl_4db1001b385e121e5d71";
export const url=new URL("../icons/widget_width-fill.svg?v=89579ad09cf0938825a3c919cd6da40d1477f9b994f7079458500370887be024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
