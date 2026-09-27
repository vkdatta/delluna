export const name="edit_calendar";
export const id="dl_6a2b4fbd431079eb3192";
export const url=new URL("../icons/edit_calendar.svg?v=6c4e89a58108bd9d0f5e4442427c2f350f0ec0d8790973a8788b83c23aeaf109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
