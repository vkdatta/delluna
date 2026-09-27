export const name="cell-signal-full-bold";
export const id="dl_f0d01c8b2b0943f789b5";
export const url=new URL("../icons/cell-signal-full-bold.svg?v=1efd808d0a244ec3e0b9d2cbf5cb3f46e39a7d225ffb25ed3bf8ff25196ebed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
