export const name="note";
export const id="dl_4b969c18d645461eaa10";
export const url=new URL("../icons/note.svg?v=84765134b9d5c8fe3c5fbb0389413f430f62060cbe064962c87ca1dc3f6f2946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
