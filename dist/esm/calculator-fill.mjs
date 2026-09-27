export const name="calculator-fill";
export const id="dl_143f74ceedcf457f869f";
export const url=new URL("../icons/calculator-fill.svg?v=ddfc9c6bfdaf17a31dc3b7bcc7660e6ea8042f514e4dc8d33e6d77ca834b250a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
