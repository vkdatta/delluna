export const name="event_seat-fill";
export const id="dl_a58bbdf55e8b453d8027";
export const url=new URL("../icons/event_seat-fill.svg?v=ddbd6ff0dd5364cffc95395daafba15e34b8b0a904c890c725bd35226c8e8d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
