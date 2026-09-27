export const name="view_timeline-fill";
export const id="dl_4e85e35093d7e42459a5";
export const url=new URL("../icons/view_timeline-fill.svg?v=750445ff4d39027c5cee6f236a9eabe441c28bfd8987d68752c7f6949b2fb1ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
