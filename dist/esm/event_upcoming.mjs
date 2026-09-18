export const name="event_upcoming";
export const id="dl_d5151067b4c44655baa0";
export const url=new URL("../icons/event_upcoming.svg?v=9f41f9d2c37369e03096d9e36ff1aedf4f6cd5d18d8a147181aece25f368b221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
