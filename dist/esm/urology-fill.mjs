export const name="urology-fill";
export const id="dl_6ce8a5aa85d915643d57";
export const url=new URL("../icons/urology-fill.svg?v=cac741dd16f66356adca3ae956155e1a98931f5fad98f1cf6bc108392868365c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
