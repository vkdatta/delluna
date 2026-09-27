export const name="fiber_new-fill";
export const id="dl_2787260ebe8ce052bdcf";
export const url=new URL("../icons/fiber_new-fill.svg?v=5e59b0b88b611966115b4000c94d717403a16cf019c55af8d71dc76289054161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
