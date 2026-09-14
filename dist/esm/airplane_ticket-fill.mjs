export const name="airplane_ticket-fill";
export const id="dl_20ace54a8c9a42488328";
export const url=new URL("../icons/A/airplane_ticket-fill.svg?v=920980cd11ad354351a934fc271bccda10ff15a58959d9e8798b7fb4e37bc3ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
