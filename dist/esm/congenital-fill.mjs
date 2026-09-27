export const name="congenital-fill";
export const id="dl_53ae14f77a049bcb9568";
export const url=new URL("../icons/congenital-fill.svg?v=35dee712ab8b78d958cce69cd61b960cca9615028a5d0595f0566fe257196852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
