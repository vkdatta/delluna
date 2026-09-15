export const name="dashboard-fill";
export const id="dl_d2a27b890e964e7aa9bf";
export const url=new URL("../icons/D/dashboard-fill.svg?v=4f6d1c63f161cc8c096116ed1782e0c8e95a280836d389e8108af6717daeabfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
