export const name="cancel_schedule_send";
export const id="dl_444eb9a85cf466cb13c1";
export const url=new URL("../icons/cancel_schedule_send.svg?v=f8fb31586f8efae18ea53ad5f9241aca74c4530ceb0583c268f48a3d9cadb1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
