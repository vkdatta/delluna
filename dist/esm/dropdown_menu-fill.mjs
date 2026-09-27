export const name="dropdown_menu-fill";
export const id="dl_295797e344b6aeb6c9df";
export const url=new URL("../icons/dropdown_menu-fill.svg?v=d60a55013ce80de7cc314592db90a01910e4e0a7bd5e2d87fe3e56833b70468f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
