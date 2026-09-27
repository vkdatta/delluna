export const name="crown-cross-bold";
export const id="dl_d0bb581bbf30449485e5";
export const url=new URL("../icons/crown-cross-bold.svg?v=76bf98b0bf08d58cd3d0aca962ddf7a9f51e6d389e751ad80e2988367e61605b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
