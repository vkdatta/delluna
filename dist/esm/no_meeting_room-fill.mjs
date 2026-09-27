export const name="no_meeting_room-fill";
export const id="dl_49ff9554d67cc495d68b";
export const url=new URL("../icons/no_meeting_room-fill.svg?v=d6374c2612c16c6c207795323e0daea4d6c7bd73362454cad964313360c5a069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
