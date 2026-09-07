export const name="shipping-container-fill";
export const id="dl_d5017fdb7ab342a28379";
export const url=new URL("../icons/S/shipping-container-fill.svg?v=7d73f460ceb64f0e6cdd7ccfbaf12b3f75f7f22eb64f87a54948218ccc8640d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
