export const name="calendar_clock-fill";
export const id="dl_8d16eeb2afa4b0c6b7e0";
export const url=new URL("../icons/calendar_clock-fill.svg?v=c692606771c73f9e9d085fb669990e2fe8704ae7040e6fe267477834ba0a2cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
