export const name="event_available-fill";
export const id="dl_ed500e31cc66091913cd";
export const url=new URL("../icons/event_available-fill.svg?v=7afd3310a6933112d9b5c1ffc4e34b58932df4e562f2492a4bcbbfb786c70c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
