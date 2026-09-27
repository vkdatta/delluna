export const name="monitor_heart-fill";
export const id="dl_1b1c83992b867ef483b1";
export const url=new URL("../icons/monitor_heart-fill.svg?v=72ff2064909e0d16184ffafb8b97137937b8e5ee5ef27198d8788aadf8391781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
