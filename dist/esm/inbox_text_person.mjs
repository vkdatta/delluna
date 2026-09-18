export const name="inbox_text_person";
export const id="dl_3c5cc58a9b9f44d2a7f0";
export const url=new URL("../icons/I/inbox_text_person.svg?v=2f0ceece645621bbe36a34ab8650839a39286364419599dcbb972e4536c746be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
