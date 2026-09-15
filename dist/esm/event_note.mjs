export const name="event_note";
export const id="dl_76974c7cffb6463297c9";
export const url=new URL("../icons/E/event_note.svg?v=4b9e453451415b3efd55b3f053ddccd21474150e58d36a31bb8e756456d89378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
