export const name="calendar_view_day";
export const id="dl_83f32958eb3bbe7f09c6";
export const url=new URL("../icons/calendar_view_day.svg?v=75bf32fa8806bc7d0d8dc85d0095423dffb5d9fe2a8072bcbbc2655017109f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
