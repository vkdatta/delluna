export const name="sidebar-simple-fill";
export const id="dl_bb143e7a0656234322d1";
export const url=new URL("../icons/sidebar-simple-fill.svg?v=e222968d9826176c4591a5276b9219e3eef69ed0a085d344cab73da3839dd6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
