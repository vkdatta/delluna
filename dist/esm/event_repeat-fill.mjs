export const name="event_repeat-fill";
export const id="dl_302ee00b5ce7a1a2b417";
export const url=new URL("../icons/event_repeat-fill.svg?v=c5ed6bad4c5dc8e54883d95169616c8f80f3c65f3d46e0c9d5362b23714f2cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
