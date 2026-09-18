export const name="nest_cam_indoor-fill";
export const id="dl_0cb6ff575f97454ba002";
export const url=new URL("../icons/N/nest_cam_indoor-fill.svg?v=7c2486f6ccbe38dbed4b35a0cab925811d0d9009f7f9e99530a96687a5606bbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
