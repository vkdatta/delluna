export const name="event_note-fill";
export const id="dl_3c4c8ca4360f35d55d54";
export const url=new URL("../icons/event_note-fill.svg?v=c52974e26154e899be77df3b31a5c309841add14b9f6ac91c8c8eb9c26aaaa1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
