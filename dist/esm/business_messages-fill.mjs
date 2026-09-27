export const name="business_messages-fill";
export const id="dl_580bab1e57a6420b9676";
export const url=new URL("../icons/business_messages-fill.svg?v=89a0677ba8e45f66fe698d871885b8c5c77aaff07e5590e303921d036afbd644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
