export const name="event_seat";
export const id="dl_5e5da6e912ba19c2266c";
export const url=new URL("../icons/event_seat.svg?v=10d7650f62bde195187422c7dcaa1e67e30c0c9d0c44cff87a3ac363ca216eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
