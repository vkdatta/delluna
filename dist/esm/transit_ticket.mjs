export const name="transit_ticket";
export const id="dl_f9c34f236a2929c88ab9";
export const url=new URL("../icons/transit_ticket.svg?v=2c5250118d90d05aec578e21bf87a3be162abe3bf771ffb1522dc3a6abd0cb7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
