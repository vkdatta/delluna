export const name="priority";
export const id="dl_3434df18752a0495a3d3";
export const url=new URL("../icons/priority.svg?v=a938d0de3a1bd1acc1e0c5bdc7d4f7d011c1a94a1300d0eb133781c471c82260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
