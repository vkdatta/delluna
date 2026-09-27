export const name="videocam_off-fill";
export const id="dl_4bd56f64448716adfc40";
export const url=new URL("../icons/videocam_off-fill.svg?v=951be1f215636c425b3fc7a6432a8b72c8f143f0661e2621248d88318fe3fc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
