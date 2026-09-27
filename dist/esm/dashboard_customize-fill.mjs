export const name="dashboard_customize-fill";
export const id="dl_459c12efd754d66aaa28";
export const url=new URL("../icons/dashboard_customize-fill.svg?v=76daa6f2f603c46f4d307568eab2262bbf79c949b31dfd81d9a931bd5b23af38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
