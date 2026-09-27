export const name="dashboard_customize";
export const id="dl_659d85646a3c7cebce4e";
export const url=new URL("../icons/dashboard_customize.svg?v=9351a7fce6b2c8cc4aa94cbe5e580d9414010dda1c68fe4f6428a42f07a03fde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
