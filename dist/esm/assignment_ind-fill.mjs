export const name="assignment_ind-fill";
export const id="dl_394a2580aeb1436f56ac";
export const url=new URL("../icons/assignment_ind-fill.svg?v=bc17a1b3e7d6c600374c5688cabb14a6dded6aa2dbf5d5ecffbc98ea3cc383d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
