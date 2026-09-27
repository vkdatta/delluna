export const name="do_not_step-fill";
export const id="dl_d392117d03eba019c8e0";
export const url=new URL("../icons/do_not_step-fill.svg?v=20c3d9088661b07b1be460eadf0e45a4620b736a1a171834786d2e8317edfe98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
