export const name="empty-duotone";
export const id="dl_68f720006b394e86a15c";
export const url=new URL("../icons/empty-duotone.svg?v=05a05a2713cc8c50b8212eb77f4047a34c524d4cb73661c5a7c338c8d554e2c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
