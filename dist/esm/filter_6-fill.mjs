export const name="filter_6-fill";
export const id="dl_cb2f7ea908fd17dd1bd6";
export const url=new URL("../icons/filter_6-fill.svg?v=a4ceb48b815ad8eaff60a244f2374f388cce02fd9d2299578336bcb7d36718e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
