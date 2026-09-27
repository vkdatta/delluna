export const name="outpatient-fill";
export const id="dl_68d3c210fb29f1b49a30";
export const url=new URL("../icons/outpatient-fill.svg?v=f1f0761e686fc94d5d25c3b6703dbf3d79866d122093b5bc91580f1403de7a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
