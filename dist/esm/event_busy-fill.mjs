export const name="event_busy-fill";
export const id="dl_f7810b959b54af8c06d4";
export const url=new URL("../icons/event_busy-fill.svg?v=8324d93b347820354397c4f5e49f5783c796963a99a4b0d70e5ef6b4b1f03470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
