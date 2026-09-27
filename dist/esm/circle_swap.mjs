export const name="circle_swap";
export const id="dl_ade936df477b428c919e";
export const url=new URL("../icons/circle_swap.svg?v=56f0636bb54edd811f657762a5a2c37d7a5020d93ceb9c11ccb54ffe566749b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
