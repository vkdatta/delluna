export const name="table_lamp";
export const id="dl_52806c0a0d13a6fc5226";
export const url=new URL("../icons/table_lamp.svg?v=c9281e40dc30947b0746ecf3d0f3e5550cc86f8d111cd46adbe83217a46a95a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
