export const name="event_repeat-fill";
export const id="dl_0d19483c53a04892b047";
export const url=new URL("../icons/event_repeat-fill.svg?v=769205fb67919c14d1f540882f9af99746e3a7990b808e2d64bf3937385393f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
