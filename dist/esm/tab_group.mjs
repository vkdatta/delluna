export const name="tab_group";
export const id="dl_44556e22d71d7a9da2d8";
export const url=new URL("../icons/tab_group.svg?v=d752d2d03a063d05aa1a7a404a34e5ecaaa258c14d271ae5cc43cc4d89e754fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
