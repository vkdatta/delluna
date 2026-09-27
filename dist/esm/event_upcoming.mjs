export const name="event_upcoming";
export const id="dl_0d2cb09f62444d19158b";
export const url=new URL("../icons/event_upcoming.svg?v=097eef8d230fa93ce2c43bc7c3c2444dc7d8322a6bf866d7f031cead5136abd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
