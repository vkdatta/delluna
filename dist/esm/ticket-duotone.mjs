export const name="ticket-duotone";
export const id="dl_9b8ee3e0556cc8a670c1";
export const url=new URL("../icons/ticket-duotone.svg?v=d4a64bef6b230f0258ec5be3f642635c9fe5d4bf7a75af4663ca3ddbf95d7940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
