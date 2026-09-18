export const name="broadcast_on_personal";
export const id="dl_9d14c5fbf9524d33b82f";
export const url=new URL("../icons/broadcast_on_personal.svg?v=a8f3ee88154ccf914b6e0154c1730023aaa543912d1242be45bbbc7589c04d80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
