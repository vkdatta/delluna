export const name="inbox";
export const id="dl_3456513cd214d2183545";
export const url=new URL("../icons/inbox.svg?v=35ae89f5f63cf8e5a74ed252dd58e092f3eaea6cb8c6124678c398c981f1e447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
