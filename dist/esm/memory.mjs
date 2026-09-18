export const name="memory";
export const id="dl_e130555af48e4eb9bed8";
export const url=new URL("../icons/memory.svg?v=da28dbd93dd8e3bc225e6a2827285096a69e681dff2e04bf1c72f86b9829f043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
