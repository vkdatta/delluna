export const name="hand-swipe-right-duotone";
export const id="dl_96f631775bfb4bc28766";
export const url=new URL("../icons/hand-swipe-right-duotone.svg?v=dce0007fd39832271134bce2e46d818e6362cfef080204b5b7251397d0448832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
