export const name="lock-laminated-duotone";
export const id="dl_0f470f012b524238addb";
export const url=new URL("../icons/lock-laminated-duotone.svg?v=5fa157df7077527a249f102ce5fa66a8356bedca0cd1d0ffefb56460fdcbfbd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
