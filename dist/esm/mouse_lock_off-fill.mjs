export const name="mouse_lock_off-fill";
export const id="dl_8f1ec1db58e938d9e0fe";
export const url=new URL("../icons/mouse_lock_off-fill.svg?v=8cce3aa0bb20e2a2f9a951d8298f48935646389a786042b3163695600fe8706d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
