export const name="arrow_or_edge";
export const id="dl_d4af48f72f93cf9b18ce";
export const url=new URL("../icons/arrow_or_edge.svg?v=92cce375997a13f4b0084ab81ed06da4fa6af82f198a9e999e6c3f4a6be7c1f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
