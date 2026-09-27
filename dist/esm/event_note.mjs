export const name="event_note";
export const id="dl_ddfbf1e0c7472be03489";
export const url=new URL("../icons/event_note.svg?v=b5a3971ec259dd5a768d1aec4e9efc36049f3a64696722a3f07e08a2660baf3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
