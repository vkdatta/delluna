export const name="circle_swap";
export const id="dl_ade936df477b428c919e";
export const url=new URL("../icons/circle_swap.svg?v=1636434ffc78d129f10098e18aa2aba9b1e3488e106de88c4de5d5983fd7931d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
