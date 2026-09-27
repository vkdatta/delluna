export const name="pulse_alert-fill";
export const id="dl_661bc88d584034b6bb56";
export const url=new URL("../icons/pulse_alert-fill.svg?v=ca0a85553ba934da608a661f62b9ae2d70d412574e49cb858f4c7ac2b08d4caf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
