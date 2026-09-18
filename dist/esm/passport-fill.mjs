export const name="passport-fill";
export const id="dl_d270c92b102a48d398fa";
export const url=new URL("../icons/passport-fill.svg?v=fa38ef604b85b0efe4ce002a352f4aac0a67bf913030a613b8cd2642cd8dd6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
