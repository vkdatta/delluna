export const name="overview_key-fill";
export const id="dl_c47d3c15441b123406b1";
export const url=new URL("../icons/overview_key-fill.svg?v=d9698fab81e74af04050b3923daafa3c4190f223ce9b6e950a359ecd1569875a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
