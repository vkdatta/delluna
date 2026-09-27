export const name="mouse_lock";
export const id="dl_db321856089f505d0991";
export const url=new URL("../icons/mouse_lock.svg?v=48c5868a4dbe81652c2340fa1d28a3772301c895fd8e0361ba11045826cd97e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
