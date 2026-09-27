export const name="dashboard_2-fill";
export const id="dl_da276667374f68d63fbe";
export const url=new URL("../icons/dashboard_2-fill.svg?v=359fd79dfcdfa061ced17d0512ddb674ed7bbe798756896cdd56a0770487d14f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
