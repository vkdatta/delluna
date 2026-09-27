export const name="student-bold";
export const id="dl_904539f691945b01de33";
export const url=new URL("../icons/student-bold.svg?v=7e3d3442e93f30177efaad20f4fc570d0302c854ed4bf0309d9b325c17039639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
