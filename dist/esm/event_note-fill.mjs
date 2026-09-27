export const name="event_note-fill";
export const id="dl_b2e71dce021a0fed7b29";
export const url=new URL("../icons/event_note-fill.svg?v=d3f1c2ba4959e7fbf54968ff3f0eb041a1da2126a74d5d2bca50292d6060fa29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
