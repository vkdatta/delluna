export const name="barn-thin";
export const id="dl_a05e681f349d4fa6aed4";
export const url=new URL("../icons/barn-thin.svg?v=bf6c8eb787b9fc789dcde5d315f63e8ec1c085c07f3126267d32767778418fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
