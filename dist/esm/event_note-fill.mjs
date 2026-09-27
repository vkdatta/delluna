export const name="event_note-fill";
export const id="dl_b84a7fd0041bd173f1b1";
export const url=new URL("../icons/event_note-fill.svg?v=0e716814351aa187105864a3a51b1e0c27394a7cd77e668c58fc9a38236e4459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
