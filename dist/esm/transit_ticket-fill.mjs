export const name="transit_ticket-fill";
export const id="dl_c0581857911a9004477e";
export const url=new URL("../icons/transit_ticket-fill.svg?v=382c29466a661f10dad83a2e853426d5c7aeb22d89853a8ceaf8a5e1e887f0f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
