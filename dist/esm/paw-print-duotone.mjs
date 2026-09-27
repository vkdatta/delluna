export const name="paw-print-duotone";
export const id="dl_b1ce678ba86c46f19715";
export const url=new URL("../icons/paw-print-duotone.svg?v=6c8da0782f51fa3bad42cd4960d11997b341ca1862dcbad643976ea929686384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
