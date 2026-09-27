export const name="lucid_3-milestone";
export const id="dl_dc86ff532e934b62a9b1";
export const url=new URL("../icons/lucid_3-milestone.svg?v=65a70f3baf57a6b0e9d14a13bfb5847aea2d3c8931eff6d441d2b86b297b3e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
