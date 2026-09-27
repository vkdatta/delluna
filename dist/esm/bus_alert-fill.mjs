export const name="bus_alert-fill";
export const id="dl_5bb21b48723c5a12889b";
export const url=new URL("../icons/bus_alert-fill.svg?v=7c892a6a0f46ef8fb453b5da25842d46b7711f20f3d6d94a99bd3c765895518f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
