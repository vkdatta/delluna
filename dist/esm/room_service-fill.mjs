export const name="room_service-fill";
export const id="dl_277cb543cfee484fa95c";
export const url=new URL("../icons/room_service-fill.svg?v=88f4f864c072670b52864f0ba10ac87421bd1418b85261671eb7b2162d918e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
