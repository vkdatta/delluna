export const name="3g_mobiledata_badge-fill";
export const id="dl_1c023154d0679b400601";
export const url=new URL("../icons/3g_mobiledata_badge-fill.svg?v=6198f0a7fd48f2ec77c4433a7eb45bd610b035051c5b7feadda14600dd8a7b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
