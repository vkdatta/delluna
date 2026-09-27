export const name="cancel_schedule_send";
export const id="dl_f8ba7699d5a3e7903b83";
export const url=new URL("../icons/cancel_schedule_send.svg?v=ae046b29d2eabc39caf0314a6d2422c452b38959aa51fcf0cdee37c5f6e4d3ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
