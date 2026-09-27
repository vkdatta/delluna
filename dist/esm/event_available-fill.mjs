export const name="event_available-fill";
export const id="dl_1b7e8132bbc71a7905b2";
export const url=new URL("../icons/event_available-fill.svg?v=791af3ddafd03999adac14d20d8ef80f7ca2b7dc922dd26c3d7faa1f64a81151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
