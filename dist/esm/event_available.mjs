export const name="event_available";
export const id="dl_3ecc315306e74187a083";
export const url=new URL("../icons/event_available.svg?v=2ed5874c3debd60815e1a07e91df8e29b7471530d949aa1fe34bf288ed3d2af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
