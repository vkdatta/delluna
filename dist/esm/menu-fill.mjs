export const name="menu-fill";
export const id="dl_3c32f7470175a09b9ad6";
export const url=new URL("../icons/menu-fill.svg?v=20bc906597683e7c559ae6fdf5f0d0d47f20681975b0f3841ff698b718037280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
