export const name="dashboard-fill";
export const id="dl_ebba959bb43e9ab9b3a8";
export const url=new URL("../icons/dashboard-fill.svg?v=4d1577da7acec67f39478f100275c8cf9c3d704fca04cd74dd594223b5199a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
