export const name="event_seat";
export const id="dl_36805416a3035a78df9c";
export const url=new URL("../icons/event_seat.svg?v=761abc536c38cb6183a030ab8662135dc162e5c2a83c73eb730f5f02aef1d286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
