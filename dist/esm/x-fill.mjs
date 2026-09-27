export const name="x-fill";
export const id="dl_961857189237c22c5656";
export const url=new URL("../icons/x-fill.svg?v=aeacd9d85af49bb44b352d75b4327c56c63e29b4e625929c5878cb8d05635506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
