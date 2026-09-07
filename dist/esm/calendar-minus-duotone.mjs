export const name="calendar-minus-duotone";
export const id="dl_55d596d3b8d046d1a21a";
export const url=new URL("../icons/calendar-minus-duotone.svg?v=0a7d09943570a3a4a23782fa2af5c89260ffdc6907fbc39575e6b51917cbd1ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
