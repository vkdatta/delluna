export const name="procedure-fill";
export const id="dl_3bd782136a7d1d7e77de";
export const url=new URL("../icons/procedure-fill.svg?v=743be08da20f64ecbd4f030a58d7848b77df293ab37baae1e5642b13fe295040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
