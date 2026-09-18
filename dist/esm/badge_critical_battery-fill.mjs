export const name="badge_critical_battery-fill";
export const id="dl_524fb00bf9cc4fe8bb8c";
export const url=new URL("../icons/badge_critical_battery-fill.svg?v=2eed06f97973d1dd90140c029b768d2ea7722c52bc5ba842596d2a92f9229e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
