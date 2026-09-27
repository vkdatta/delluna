export const name="order_approve";
export const id="dl_9488ba7aa88fd3060eb3";
export const url=new URL("../icons/order_approve.svg?v=8bad4f6a0e188386951767ff85ada344c195358b3498c2f7722c9306b47901a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
