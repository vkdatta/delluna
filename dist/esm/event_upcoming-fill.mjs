export const name="event_upcoming-fill";
export const id="dl_dd8bf604b546ddf6cdbc";
export const url=new URL("../icons/event_upcoming-fill.svg?v=5e666606a947f5a5e45967c1bb91404d2de0bc2b2faa1fd1c0a815ffb9592a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
