export const name="event_seat";
export const id="dl_b21407e84bdbbdeed6de";
export const url=new URL("../icons/event_seat.svg?v=c2838124cf0ead3f3fec5407d1e8f54a1774e0bb649db8a2a3c2e1b781dd23c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
