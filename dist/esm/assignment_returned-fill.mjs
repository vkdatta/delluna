export const name="assignment_returned-fill";
export const id="dl_b04eb03cc1ea54e25608";
export const url=new URL("../icons/assignment_returned-fill.svg?v=452635d517228d63e6228f870e2a30800dd0eb3789a8a6f11a9909429193fb50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
